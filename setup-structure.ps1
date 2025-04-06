# Base path
$base = "grocery-frontend"

# Create base structure
$folders = @(
    "$base/.github/workflows",
    "$base/src/app/components/navbar",
    "$base/src/app/pages/login",
    "$base/src/app/pages/register",
    "$base/src/app/pages/home",
    "$base/src/app/pages/cart",
    "$base/src/app/pages/orders",
    "$base/src/app/pages/profile",
    "$base/src/app/services",
    "$base/src/app/models",
    "$base/src/app/guards",
    "$base/src/assets",
    "$base/src/environments"
)

$files = @(
    "$base/.github/workflows/deploy.yml",
    "$base/src/app/components/navbar/navbar.component.ts",
    "$base/src/app/components/navbar/navbar.component.html",
    "$base/src/app/components/navbar/navbar.component.css",
    "$base/src/app/pages/login/login.component.ts",
    "$base/src/app/pages/login/login.component.html",
    "$base/src/app/pages/login/login.component.css",
    "$base/src/app/pages/register/register.component.ts",
    "$base/src/app/pages/register/register.component.html",
    "$base/src/app/pages/register/register.component.css",
    "$base/src/app/pages/home/home.component.ts",
    "$base/src/app/pages/home/home.component.html",
    "$base/src/app/pages/home/home.component.css",
    "$base/src/app/pages/cart/cart.component.ts",
    "$base/src/app/pages/cart/cart.component.html",
    "$base/src/app/pages/cart/cart.component.css",
    "$base/src/app/pages/orders/orders.component.ts",
    "$base/src/app/pages/orders/orders.component.html",
    "$base/src/app/pages/orders/orders.component.css",
    "$base/src/app/pages/profile/profile.component.ts",
    "$base/src/app/pages/profile/profile.component.html",
    "$base/src/app/pages/profile/profile.component.css",
    "$base/src/app/services/auth.service.ts",
    "$base/src/app/services/product.service.ts",
    "$base/src/app/services/order.service.ts",
    "$base/src/app/models/user.model.ts",
    "$base/src/app/models/product.model.ts",
    "$base/src/app/models/order.model.ts",
    "$base/src/app/guards/auth.guard.ts",
    "$base/src/app/app-routing.module.ts",
    "$base/src/app/app.module.ts",
    "$base/src/app/app.component.ts",
    "$base/src/app/app.component.html",
    "$base/src/app/app.component.css",
    "$base/src/environments/environment.ts",
    "$base/src/environments/environment.prod.ts",
    "$base/src/index.html",
    "$base/src/main.ts",
    "$base/src/styles.css",
    "$base/angular.json",
    "$base/package.json",
    "$base/tsconfig.json",
    "$base/README.md"
)

# Create all folders
foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder
}

# Create all empty files
foreach ($file in $files) {
    New-Item -ItemType File -Force -Path $file
}
