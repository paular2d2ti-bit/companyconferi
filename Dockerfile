FROM node:20-slim AS base
WORKDIR /app
# Instalar o Bun
RUN apt-get update && apt-get install -y curl unzip && \
    curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# Stage 2: Install dependencies
FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Stage 3: Build the application
FROM base AS build
COPY --from=deps /app/node_modules /app/node_modules
COPY . .
RUN bun run build

# Stage 4: Production runner
FROM base
COPY --from=build /app/.output /app/.output

ENV PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

