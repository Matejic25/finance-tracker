<template>
    <div
        class="min-h-screen flex flex-col items-center justify-center text-center p-4"
    >
        <h1 class="text-5xl font-bold text-red-500 mb-4">
            404 - Page Not Found
        </h1>
        <p class="text-lg text-gray-300 mb-6">
            Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <RouterLink :to="{ name: 'dashboard' }" class="text-blue-400 underline"
            >Go back home</RouterLink
        >
    </div>
</template>
