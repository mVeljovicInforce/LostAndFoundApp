const items = [
	{
		name: "Black Wallet",
		status: "Lost",
		location: "West Garden",
		date: "2026-10-09",
		image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
	},
	{
		name: "Everyday backpack",
		status: "Found",
		location: "Maple Library",
		date: "2026-10-12",
		image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=800&q=80",
	},
	{
		name: "Black headphones",
		status: "Lost",
		location: "North Hall",
		date: "2026-10-11",
		image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
	},
	{
		name: "Compact camera",
		status: "Found",
		location: "Cedar Park",
		date: "2026-10-10",
		image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
	},
];

const itemGrid = document.querySelector("#item-grid");
const itemSearch = document.querySelector("#item-search");
const statusFilterButtons = document.querySelectorAll("[data-status-filter]");
const reportForm = document.querySelector(".report-form");
const itemNameInput = document.querySelector("#item-name");
const itemStatusInput = document.querySelector("#item-status");
const itemLocationInput = document.querySelector("#item-location");
const itemDateInput = document.querySelector("#item-date");
const itemImageInput = document.querySelector("#item-image");
const reportFeedback = document.querySelector("#report-feedback");
const dateFormatter = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
});

function filterItemsByName(items, searchText) {
	const normalizedSearchText = searchText.toLowerCase();
	return items.filter((item) => item.name.toLowerCase().includes(normalizedSearchText));
}

function filterItemsByStatus(items, statusFilter) {
	if (statusFilter === "all") {
		return items;
	}

	return items.filter((item) => item.status.toLowerCase() === statusFilter);
}

let selectedStatusFilter = "all";

function updateVisibleItems() {
	const nameMatches = filterItemsByName(items, itemSearch.value);
	renderItems(filterItemsByStatus(nameMatches, selectedStatusFilter));
}

function readItemForm() {
	return {
		name: itemNameInput.value,
		status: itemStatusInput.value,
		location: itemLocationInput.value,
		date: itemDateInput.value,
		image: itemImageInput.files[0],
	};
}

function validateStatusInput() {
	const validStatus = !itemStatusInput.value || ["Lost", "Found"].includes(itemStatusInput.value);
	itemStatusInput.setCustomValidity(validStatus ? "" : "Choose Lost or Found.");
}

function validateImageInput() {
	const selectedImage = itemImageInput.files[0];
	const validImage = !selectedImage || selectedImage.type.startsWith("image/");
	itemImageInput.setCustomValidity(validImage ? "" : "Choose an image file.");
}

function validateItemForm() {
	validateStatusInput();
	validateImageInput();
	return reportForm.reportValidity();
}

function createItem(formData) {
	return {
		name: formData.name,
		status: formData.status,
		location: formData.location,
		date: formData.date,
		image: URL.createObjectURL(formData.image),
	};
}

function handleReportSubmit(event) {
	event.preventDefault();
	reportFeedback.textContent = "";

	if (!validateItemForm()) {
		return;
	}

	items.push(createItem(readItemForm()));
	updateVisibleItems();
	reportForm.reset();
	reportFeedback.textContent = "Your item was reported successfully.";
}

function handleStatusFilterClick(event) {
	selectedStatusFilter = event.currentTarget.dataset.statusFilter;

	statusFilterButtons.forEach((button) => {
		const isSelected = button === event.currentTarget;
		button.classList.toggle("is-selected", isSelected);
		button.setAttribute("aria-pressed", String(isSelected));
	});

	updateVisibleItems();
}

function renderItems(itemsToRender = items) {
	const itemCards = itemsToRender.map((item) => {
		const card = document.createElement("article");
		card.className = "item-card";
		card.dataset.itemCard = "";
		card.dataset.status = item.status.toLowerCase();

		const imageContainer = document.createElement("div");
		imageContainer.className = "item-image";

		const image = document.createElement("img");
		image.src = item.image;
		image.alt = item.name;
		image.loading = "lazy";

		const statusBadge = document.createElement("span");
		statusBadge.className = `status-badge status-${item.status.toLowerCase()}`;
		statusBadge.textContent = item.status;
		imageContainer.append(image, statusBadge);

		const details = document.createElement("div");
		details.className = "item-details";

		const titleRow = document.createElement("div");
		titleRow.className = "item-title-row";

		const title = document.createElement("h3");
		title.textContent = item.name;

		const sampleMarker = document.createElement("span");
		sampleMarker.className = "sample-marker";
		sampleMarker.textContent = "Sample";
		titleRow.append(title, sampleMarker);

		const location = document.createElement("p");
		location.className = "item-location";

		const locationMark = document.createElement("span");
		locationMark.className = "location-mark";
		locationMark.setAttribute("aria-hidden", "true");
		location.append(locationMark, document.createTextNode(` ${item.location}`));

		const date = document.createElement("time");
		date.dateTime = item.date;
		date.textContent = dateFormatter.format(new Date(`${item.date}T00:00:00`));

		details.append(titleRow, location, date);
		card.append(imageContainer, details);
		return card;
	});

	itemGrid.replaceChildren(...itemCards);
}

updateVisibleItems();
itemSearch.addEventListener("input", updateVisibleItems);
statusFilterButtons.forEach((button) => {
	button.addEventListener("click", handleStatusFilterClick);
});
reportForm.addEventListener("submit", handleReportSubmit);
itemStatusInput.addEventListener("change", validateStatusInput);
itemImageInput.addEventListener("change", validateImageInput);
