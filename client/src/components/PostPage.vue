<template>
	<main>
		<div>
			<div>
				<div>
					<div>
						<br/>
						<h2 style="text-align: center">Add a new Item</h2>
						<form id="postpage"> 
							<br/>
							
							
							<label for="category">Category</label>
							<select style="width: 100%" v-model="selected">  
								<option disabled>Please select one</option>
								<option v-for="option in options" v-bind:value="option.id" v-bind:key ="option.value">{{option.value}}</option>
							</select>
							<br/>
							<br/>
							<!-- Title -->
							<div>
								<label style="margin-bottom: 0px">Title</label>
								<input type="text" style="width: 100%" name="title" v-model="title"/>
							</div>
							
							<div id="divForTxt" v-if="selected === 1">
							<br/>	
							<!-- Author -->
							<div>
								<label style="margin-bottom: 0px">Author</label>
								<input type="text" style="width: 100%" name="author" v-model="author"/>
							</div>
							<br/>
							<!-- ISBN number -->
							<div>	
								<label style="margin-bottom: 0px">ISBN#</label>
								<input type="text" style="width: 100%" name="isbnnum" v-model="isbnnum"/>
							</div>
							</div>
							
							<br/>
							<!-- Price Dropdown -->
							<div>
								<label style="margin-bottom: 0px">Price</label>
								<input type="number" style="width: 100%" name="price" v-model="price"/>
							</div>
							<br/>
							<!-- Description  -->
							<div>
								<label style="margin-bottom: 0px">Description</label>
								<textarea placeholder="Provide details such as a item description" name="descript" v-model="descript"></textarea>
							</div>
							<br/>
							<!-- Photo  -->
							<div>
								<label style="margin-bottom: 0px">Add photo</label>
								<div>
									<input type="file" @change="previewImage" accept="image/*">				
								</div>
								<div v-if="imageData.length > 0">
									<image class="preview" :src="imageData"></image>
								</div>
							</div>
							<br/>
							<!-- button  -->
							<hr style="width: 107%"/>
							<div>
								<button v-on:click="processForm()" type="button">Add Item</button>
							</div>	
						</form>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style>

form {
	color: white;
}


textarea {
	resize:vertical;
	width: 107%;
	height: 85px;
}

img.preview {
	width: 200px;
	background-color: white;
	border: 1px solid #DDD;
	padding: 5x;
}
</style>

<script>
export default {
	data: () => {
		return {
		title: "",
		author: "",
		isbnnum: "",
		price: "",
		descript: "",
		imageData: "",
		selected: "Please select one",
		options: [{id:1, value: 'Textbook'},{id:2, value: 'Electronic'},{id:3, value: 'Other'}],
		
		};
	},

	methods: {
		processForm: function() {
			console.log({title: this.title, 
			author: this.author, isbnnum: this.isbnnum,
			price: this.price, descript: this.descript, photo: this.photo});
			alert('processing!');
		},

		previewImage: function(event) {
			var input = event.target;
			if(input.files && input.files[0]) {
				var reader = new FileReader();
				reader.onload = (e) => {
					this.imageData = e.target.result;
				}
				reader.readAsDataURL(input.files[0]);
			}
		}
	}
}
</script>