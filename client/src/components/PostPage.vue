<template>
  <div class="postpage">
    <br />
    <h2 style="text-align: center">Add a new Item</h2>
    <!-- <form id="postpage">
      <br /> -->
      <br/>
      <div class ="center">
      <label for="category">Category:  </label>
      <select v-model="selected" style="height: 30px; width: 100%; border-radius:15px;">
        <option disabled>Please select one</option>
        <option
          v-for="option in options"
          v-bind:value="option.id"
          v-bind:key="option.value"
        >
          {{ option.value }}
        </option>
      </select>
      <br />
      <br />
      <!-- Title -->
      <div style="align-items: center;">
        <label>Title: </label>
        <input type="text" name="title" v-model="title" style="align-items: center; height: 30px; width:100%; border-radius: 15px;"/>
      </div>

      <div id="divForTxt" v-if="selected === 1">
        <br />
        <!-- Author -->
        <div>
          <label>Author: </label>
          <input
            type="text"
            name="author"
            style="height: 30px; border-radius:15px; width:100%;"
            v-model="author"
          />
        </div>
        <br />
        <!-- ISBN number -->
        <div>
          <label>ISBN# </label>
          <input
            type="text"
            name="isbnnum"
            style="height: 30px; border-radius:15px; width:100%;"
            v-model="isbnnum"
          />
        </div>
      </div>

      <br />
      <!-- Price Dropdown -->
      <div>
        <label>Price: </label>
        <input type="number" style="height: 30px; width: 100%; border-radius:15px;" name="price" v-model="price" />
      </div>
      <br />
      <!-- Description  -->
      <div>
        <label>Description: </label>
        <textarea
          placeholder="Provide details such as a item description"
          name="descript"
          v-model="descript"
        ></textarea>
      </div>
      <br />
      <!-- Photo  -->
      <div>
        <label>Add photo</label>
        <div>
          <input type="file" @change="previewImage" accept="image/*" />
        </div>
        <div v-if="imageData.length > 0">
          <image class="preview" :src="imageData"></image>
        </div>
      </div>
      <br />
      <!-- button  -->
      <hr/>
      <div>
        <button v-on:click="processForm()" type="button">Add Item</button>
      </div>
    <!-- </form> -->
    </div>
  </div>
</template>



<script>
//import InfoService from "../Service/InfoService";
import axios from "axios";
const url = "api/info/";

export default {
  data: () => {
    return {
      id: "5f67e3c5597b0a0e53982fd2",
      title: "",
      author: "",
      isbnnum: "",
      price: "",
      descript: "",
      photo: "",
      isTxt: false,
      email: "",
      imageData: "",
      selected: "Please select one",
      options: [
        { id: 1, value: "Textbook" },
        { id: 2, value: "Electronic" },
        { id: 3, value: "Other" },
      ],
    };
  },

  methods: {
    async processForm() {
      //await InfoService.insertInfoAgain(id,this.title,this.author, this.isbnnum,this.price,this.descript,this.photo);
      await axios.put(`${url}${this.id}`, {
        title: this.title,
        author: this.author,
        isbnnum: this.isbnnum,
        price: this.price,
        descript: this.descript,
        photo: this.photo,
        email: this.email,
      });
      alert("Added new Item!");
    },

    previewImage: function (event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style scoped>

*{
  margin: 0;
}
.postpage{
  padding: 20px;
  color: #234e70;
  background-color: #fbf8be;
  position: relative;
  height: 700px;
  width: 97.9%;

}
textarea {
  resize: vertical;
  width: 100%;
  height: 85px;
  border-radius: 15px;
}

img.preview {
  width: 200px;
  background-color: white;
  border: 1px solid #ddd;
  padding: 5x;
}

.center {
  margin: auto;
  width: 60%;
 
  padding: 10px;
}
</style>
