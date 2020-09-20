<template>
	<main>
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-3"></div>
				<div class="col-sm-6">
					<div class="a-section">
						<div class="a-spacing-top-medium"></div>
						<h2 style="text-align: center">Add a new Item</h2>
						<form>
							<!-- Title -->
							<div class="a-spacing-top-medium">
								<label style="margin-bottom: 0px">Title</label>
								<input type="text" class="a-input-text" style="width: 100%" />
							</div>

							<!-- Author -->
							<div class="a-spacing-top-medium">
								<label style="margin-bottom: 0px">Author</label>
								<input type="text" class="a-input-text" style="width: 100%" />
							</div>

							<!-- ISBN number -->
							<div class="a-spacing-top-medium">
								<label style="margin-bottom: 0px">ISBN#</label>
								<input type="text" class="a-input-text" style="width: 100%" />
							</div>

							<!-- Price  -->
							<div class="a-spacing-top-medium">
								<label style="margin-bottom: 0px">Price($)</label>
								<input type="number" class="a-input-text" style="width: 100%" />
							</div>

							<!-- Description  -->
							<div class="a-spacing-top-medium">
								<label style="margin-bottom: 0px">Description</label>
								<textarea placeholder="Provide details such as a item description" ></textarea>
							</div>

							<!-- Photo  -->
							<div class="a-spacing-top-medium">
								<label style="margin-bottom: 0px">Add photo</label>
								<div class="a-row a-spacing-small">
									<input type="file" />
								</div>
							</div>
							<!-- button  -->
							<hr style="width: 107%"/>
							<div class="a-spacing-top-large">
								<span class="a-button-register">
									<span class="a-button-inner">
										<span class="a-button-text">Add item</span>
									</span>
								</span>
							</div>
						</form>
					</div>
				</div>
				<div class="col-sm-3"></div>
			</div>
		</div>
	</main>
</template>

<style>
	.a-spacing-top-medium{
    margin-top: 18px!important;
}
.a-select-option{
    border-radius: 3px;
    border-color: #ADB1B8 #A2A6AC #8D9096;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none!important;
    vertical-align: middle;
    background: #eff1f3;
    background: -webkit-linear-gradient(top,#f7f8fa,#e7e9ec);
    background: linear-gradient(to bottom,#f7f8fa,#e7e9ec);
    width: 100%;
    height: 31px;
    padding: 0 11px 0 5px;
}

.a-input-text, 
input[type=number], 
input[type=tel], 
input[type=password], 
input[type=date], 
input[type=email] {
    background-color: #fff;
    height: 31px;
    padding: 3px 7px;
    line-height: normal;
    color: #111;
}
.a-row a{
    text-decoration: none !important;
}
.a-button-inner {
    display: block;
    position: relative;
    overflow: hidden;
    height: 29px;
    box-shadow: 0 1px 0 rgba(255,255,255,.6) inset;
    border-radius: 2px;
}
.a-button-register{
    background: #81d2eb;
    border-color: #81d2eb #81d2eb #81d2eb;
    color: #111;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none!important;
    vertical-align: middle;
}

.a-spacing-top-large {
    margin-top: 22px!important;
}

.a-button-text {
    background-color: transparent;
    border: 0;
    display: block;
    font-size: 13px;
    line-height: 29px;
    margin: 0;
    outline: 0;
    padding: 0 10px 0 11px;
    text-align: center;
    white-space: nowrap;
}

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