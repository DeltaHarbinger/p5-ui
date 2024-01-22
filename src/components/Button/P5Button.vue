<script setup lang="ts">

</script>

<template>
    <button class="relative bg-white font-semibold p-4 text-xl hover:scale-110">
        <slot />
        <span class="shimmer bg-white absolute p-4 inset-0 m-auto">
            <slot />
        </span>
    </button>
</template>

<style scoped>
button:hover {
    filter: drop-shadow(4px 4px 0px #f00b0b);
    animation: shimmer-shadow 200ms linear forward;
    transition: all 200ms 100ms;
}

.shimmer {
    clip-path: polygon(0 0, 100% 8%, 100% 100%, 14% 95%);
    -webkit-clip-path: polygon(0 0, 100% 8%, 100% 100%, 14% 95%);
    opacity: 0;
    filter: invert();
    transition: opacity 500ms, clip-path 200ms;
    animation: shimmering 0.5s linear infinite;
    -webkit-animation: shimmering 0.5s linear infinite;
}

button:hover .shimmer {
    opacity: 1;
}

@keyframes shimmering {
	0% {
		-webkit-clip-path: polygon(0 0, 100% 8%, 100% 100%, 14% 95%);
		clip-path: polygon(0 0, 100% 8%, 100% 100%, 14% 95%);
	}
	25% {
		-webkit-clip-path: polygon(13% 13%, 100% 0, 85% 88%, 0 100%);
		clip-path: polygon(13% 13%, 100% 0, 85% 88%, 0 100%);
	}
    50% {
        -webkit-clip-path: polygon(0 0, 92% 4%, 100% 100%, 2% 96%);
        clip-path: polygon(0 0, 92% 4%, 100% 100%, 2% 96%);
    }
    75% {
        -webkit-clip-path: polygon(9% 2%, 100% 0, 95% 96%, 0 100%);
        clip-path: polygon(9% 2%, 100% 0, 95% 96%, 0 100%);
    }
	100% {
		-webkit-clip-path: polygon(0 0, 100% 8%, 100% 100%, 14% 95%);
		clip-path: polygon(0 0, 100% 8%, 100% 100%, 14% 95%);
	}
}

@keyframes shimmer-shadow {
    from {
        filter: drop-shadow(4px 4px 0px rgb(222, 4, 4, 0));
    }
    to {
        filter: drop-shadow(4px 4px 0px rgb(222, 4, 4, 1));
    }
}
</style>