# ---------- Build stage ----------
    FROM node:20-alpine AS build

    WORKDIR /app
    
    # Install deps first (better caching)
    COPY package*.json ./
    RUN npm ci
    
    # Copy the rest and build
    COPY . .
    RUN npm run build
    
# ---------- Runtime stage ----------
    FROM node:20-alpine AS runner
    WORKDIR /app
    
    # Install a tiny static file server
    RUN npm i -g serve
    
    # Copy only the built output
    COPY --from=build /app/dist ./dist
    
    # Change if you prefer another port
    EXPOSE 5000
    
    # Serve SPA (-s) from dist
    CMD ["serve", "-s", "dist", "-l", "5000"]
    