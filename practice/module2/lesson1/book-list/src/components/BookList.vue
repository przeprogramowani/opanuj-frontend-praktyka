<script setup lang="ts">
import { ref } from 'vue';

const newBook = ref('');
const books = ref<string[]>([]);

const addBook = () => {
  if (newBook.value.trim() !== '') {
    books.value.push(newBook.value.trim());
    newBook.value = '';
  }
};

const removeBook = (index: number) => books.value.splice(index, 1);
</script>

<template>
  <div>
    <input v-model="newBook" placeholder="Add a new book" />
    <button @click="addBook">Add Book</button>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        {{ book }}
        <button @click="removeBook(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>
