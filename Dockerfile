# -------------- Build Stage ----------------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install Dependencies
RUN npm ci

# Copy project files
COPY . .

# Build Astro
RUN npm run build


# -------------- Production Stage ----------------
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=preview

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 6004

# Start Server
CMD ["node", "dist/server/entry.mjs"]
