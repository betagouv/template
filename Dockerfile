ARG NODE_VERSION=16-alpine

# Install dependencies only when needed
FROM node:$NODE_VERSION AS prepare
RUN apk add --no-cache libc6-compat=1.2.2-r7
WORKDIR /app
COPY package.json yarn.lock ./

# Keep yarn install cache when bumping version and dependencies still the sames
RUN node -e " \
  const package = JSON.parse(fs.readFileSync('/app/package.json')); \
  const packageZero = { ...package, version: '0.0.0' };  \
  fs.writeFileSync('/app/package.json', JSON.stringify(packageZero));"

FROM node:$NODE_VERSION as deps
WORKDIR /app
COPY --from=prepare /app/package.json /app/yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:$NODE_VERSION AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build:export

# Production image, copy all the files and run next
FROM ghcr.io/socialgouv/docker/nginx:6.64.2 AS runner

# Rootless container
USER 101
ENV PORT=3000

# Disable nextjs telemetry
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/out /usr/share/nginx/html
