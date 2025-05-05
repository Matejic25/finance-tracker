<script setup>
import AboutProject from '@/components/about/AboutProject.vue';
import KeyFeatures from '@/components/about/KeyFeatures.vue';
import TechStack from '@/components/about/TechStack.vue';
import LearningGoals from '@/components/about/LearningGoals.vue';
import SectionWrapper from '@/components/about/SectionWrapper.vue';
import HeaderSectionWrapper from '@/components/about/HeaderSectionWrapper.vue';
</script>

<template>
    <div class="container mx-auto mt-16">
        <div
            class="md:grid md:grid-rows-[auto 1fr] md:grid-cols-3 lg:gap-x-12 mb-12"
        >
            <HeaderSectionWrapper>
                <template #title>
                    <h1 class="text-2xl font-bold text-center mb-6">
                        About the Project
                    </h1>
                </template>
                <template #content>
                    <AboutProject />
                </template>
            </HeaderSectionWrapper>
            <SectionWrapper>
                <template #title>
                    <h1 class="text-2xl font-bold text-center mb-6">
                        Key Features
                    </h1>
                </template>
                <template #content>
                    <KeyFeatures />
                </template>
            </SectionWrapper>
            <SectionWrapper>
                <template #title>
                    <h1 class="text-2xl font-bold text-center mb-6">
                        Tech Stack
                    </h1>
                </template>
                <template #content>
                    <TechStack />
                </template>
            </SectionWrapper>
            <SectionWrapper>
                <template #title>
                    <h1 class="text-2xl font-bold text-center mb-4">
                        Learning Goals
                    </h1>
                </template>
                <template #content>
                    <LearningGoals />
                </template>
            </SectionWrapper>
        </div>
    </div>
</template>
