<template>
	<main>
		<div>
			<div>
				<div></div>
				<div>
					<div>
						<div></div>
						<h2 style="text-align: center">Add a new Item</h2>
						<form>
							<!-- Title -->
							<div>
								<label style="margin-bottom: 0px">Title</label>
								<input type="text" style="width: 100%" />
							</div>

							<!-- Author -->
							<div>
								<label style="margin-bottom: 0px">Author</label>
								<input type="text" style="width: 100%" />
							</div>

							<!-- ISBN number -->
							<div>
								<label style="margin-bottom: 0px">ISBN#</label>
								<input type="text" style="width: 100%" />
							</div>

							<!-- Price Dropdown -->
							<div>
								<label style="margin-bottom: 0px">Price</label>
								<input type="text" style="width: 100%" />
							</div>

							<!-- Description  -->
							<div>
								<label style="margin-bottom: 0px">Description</label>
								<textarea placeholder="Provide details such as a item description" ></textarea>
							</div>

							<!-- Photo  -->
							<div>
								<label style="margin-bottom: 0px">Add photo</label>
								<div>
									<input type="file" />
									
								</div>
							</div>
							<!-- button  -->
							<hr style="width: 107%"/>
							<div>
								<span>
									<span>
										<span>Add item</span>
									</span>
								</span>
							</div>
						</form>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	</main>
</template>

<style>


textarea {
	resize:vertical;
	width: 107%;
	height: 85px;
}

</style>

<script>
export default {
	
}
</script>