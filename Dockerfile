# Stage 1: Build base
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

# Stage 2: Install dependencies
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Stage 3: Build the application
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# Stage 4: Production runner
FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/.output /app/.output

# Exposed port (TanStack Start default for node output is often 3000)
ENV PORT=3000
EXPOSE 3000

# Command to run the server
# Nitro output for node preset is usually at .output/server/index.mjs
CMD ["node", ".output/server/index.mjs"]
