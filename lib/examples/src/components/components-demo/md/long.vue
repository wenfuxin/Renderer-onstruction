<template>
  <div>
    <h1>一篇比较长的文章</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo
      auctor, aliquam nunc id, aliquet nunc. Nulla facilisi. Sed id semper nunc.
      Nulla facilisi. Nullam auctor, mauris id ultrices tincidunt, nunc nunc
      tincidunt nunc, id lacinia nunc nunc non nunc. Sed auctor, nunc id
      consectetur lacinia, nunc nunc aliquam nunc, id lacinia nunc nunc non
      nunc. Sed auctor, nunc id consectetur lacinia, nunc nunc aliquam nunc, id
      lacinia nunc nunc non nunc.
    </p>
    <p>
      Phasellus auctor, nunc id consectetur lacinia, nunc nunc aliquam nunc, id
      lacinia nunc nunc non nunc. Sed auctor, nunc id consectetur lacinia, nunc
      nunc aliquam nunc, id lacinia nunc nunc non nunc. Sed auctor, nunc id
      consectetur lacinia, nunc nunc aliquam nunc, id lacinia nunc nunc non
      nunc. Sed auctor, nunc id consectetur lacinia, nunc nunc aliquam nunc, id
      lacinia nunc nunc non nunc.
    </p>
    <p v-for="i in 30" :key="i">
      Donec auctor, nunc id consectetur lacinia, nunc nunc aliquam nunc, id
      lacinia nunc nunc non nunc. Sed auctor, nunc id consectetur lacinia, nunc
      nunc aliquam nunc, id lacinia nunc nunc non nunc. Sed auctor, nunc id
      consectetur lacinia, nunc nunc aliquam nunc, id lacinia nunc nunc non
      nunc. Sed auctor, nunc id consectetur lacinia, nunc nunc aliquam nunc, id
      lacinia nunc nunc non nunc.
    </p>
    <p>
      Sed auctor, nunc id consectetur lacinia, nunc nunc aliquam nunc, id
      lacinia nunc nunc non nunc. Sed auctor, nunc id consectetur lacinia, nunc
      nunc aliquam nunc, id lacinia nunc nunc non nunc. Sed auctor, nunc id
      consectetur lacinia, nunc nunc aliquam nunc, id lacinia nunc nunc non
      nunc. Sed auctor, nunc id consectetur lacinia, nunc nunc aliquam nunc, id
      lacinia nunc nunc non nunc.
    </p>
    <p>
      Sed auctor, nunc id consectetur lacinia, nunc nunc aliquam nunc, id
      lacinia nunc nunc non nunc. Sed auctor, nunc id consectetur lacinia, nunc
      nunc aliquam nunc, id lacinia nunc nunc non nunc. Sed auctor, nunc id
      consectetur lacinia, nunc nunc aliquam nunc, id lacinia nunc nunc non
      nunc. Sed auctor, nunc id consectetur lacinia, nunc nunc aliquam nunc, id
      lacinia nunc nunc non nunc.
    </p>
    <p>
      Sed auctor, nunc id consectetur lacinia, nunc nunc aliquam nunc, id
      lacinia nunc nunc non nunc. Sed auctor, nunc id consectetur lacinia, nunc
      nunc aliquam nunc, id lacinia nunc nunc non nunc. Sed auctor, nunc id
      consectetur lacinia, nunc nunc aliquam nunc, id lacinia nunc nunc non
      nunc. Sed auctor, nunc id consectetur lacinia, nunc nunc aliquam nunc, id
      lacinia nunc nunc non nunc.
    </p>
  </div>
</template>

<script>
export default {
  name: "LongArticle",
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
