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
							<!-- Title -->
							<div>
								<label style="margin-bottom: 0px">Title</label>
								<input type="text" style="width: 100%" name="title" v-model="title"/>
							</div>
							<br/>
							<input type="checkbox" name="trucker" v-model="isTxt">
							<label for="textbook">Is it a textbook?</label>
							<br/>
							<div id="divForTxt" v-show="isTxt">
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
									<input type="photo" name="photo" v-model="photo"/>
									
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

</style>

<script>
import InfoService from "../Service/InfoService";

export default {
	data: () => {
		return {
		title: "",
		author: "",
		isbnnum: "",
		price: "",
		descript: "",
		photo: "",
		isTxt: false,
		};
	},

	methods: {
		async processForm(id) {
			await InfoService.insertInfoAgain(id,this.title,this.author, this.isbnnum,this.price,this.descript,this.photo);
			this.info = await InfoService.getInfo();
		},	    
	}
}
</script>