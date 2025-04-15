<template>
  <div>
    <h2>Home</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam minima unde nemo harum quam maxime optio quos corrupti. Eum sapiente facere nemo, laborum ullam non cum fuga quas eveniet harum molestiae minus atque vel ratione illo quia, iure commodi dicta porro excepturi quam. Facere, commodi corrupti ipsam neque totam reprehenderit laboriosam laborum veniam est quo, repellat saepe impedit labore?</p>
    
    <p>API response:</p>
    <img :src="data" alt="Random Dog Image" v-if="data" width="200"/>
    <p v-else>Loading image...</p>
    
    <!-- Button to refetch data -->
    <button @click="refetchData">Refetch Data</button>
  </div>
</template>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>

<script setup>
  // Fetch data initially
  const { data, error, refresh: refetchData } = await useFetch('/api/ninja')
  // Optional: handle errors and loading state
  if (error) {
    console.error('Failed to fetch data:', error)
  }
</script>
