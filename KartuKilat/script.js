const menu = document.getElementById("menu");
const left = document.getElementById("left");
const right = document.getElementById("right");
const listTitle = document.querySelectorAll(".list-title");

const homeBtn = document.getElementById("home-btn");
const folderBtn = document.getElementById("folder-btn");

const home = document.getElementById("home");
const folder = document.getElementById("folder");

const newFlashcard = document.getElementById("new-flashcard");
const closeFlashcard = document.getElementById("close-flashcard-input")
const flashcardInput = document.getElementById("add-flashcard-input");
const submit = document.getElementById("submit");

menu.addEventListener("click", () => {
    left.classList.toggle("minimized");
    listTitle.forEach(element => {
        element.classList.toggle("invisible");
    });
});

homeBtn.addEventListener("click", () => {
    home.style.display = "block";
    folder.style.display = "none";
})

folderBtn.addEventListener("click", () => {
    folder.style.display = "block";
    home.style.display = "none";
})

// Untuk menambahkan flashcard di menu home
newFlashcard.addEventListener("click", () => {
    flashcardInput.classList.add("reveal");
});

closeFlashcard.addEventListener("click", () => {
    flashcardInput.classList.remove("reveal");
});

// Menambahkan flash-box di menu home
// submit.addEventListener("click", () => {
//     const flashWrapper = document.getElementById("flash-wrapper");
//     const createFlash = document.createElement("div");
//     const createTitle = document.createElement("h4");
//     const createDescription = document.createElement("p");

//     const inputTitle = document.getElementById("title");
//     const inputDescription = document.getElementById("description");

//     createFlash.className = "flash h-full mr-8 p-8 ";
//     createTitle.innerHTML = inputTitle.value;
//     createTitle.className = "font-semibold text-xl mb-2";
//     createDescription.className = "font-medium";
//     createDescription.innerHTML = inputDescription.value;

//     flashWrapper.appendChild(createFlash);
//     createFlash.appendChild(createTitle);
//     createFlash.appendChild(createDescription);

//     flashcardInput.classList.remove("reveal");

//     inputTitle.value = "";
//     inputDescription.value = "";
// });

// Coba-coba
const flash = document.querySelector(".flash[data-pair-id='12345']");

flash.addEventListener("click", () => {
    const pairedContent = document.querySelector(".flashcard[data-pair-id='12345']");

    if (pairedContent) {
        pairedContent.classList.remove("hidden");
    }
})


// HHHHAAAAAAAAAaaaaaaa.......
submit.addEventListener("click", () => {
    const flashWrapper = document.getElementById("flash-wrapper");
    const flashDuplicate = document.querySelector('.flash[data-pair-id="12345"]');  // Mencari elemen asli yang akan diduplikat

    const inputTitle = document.getElementById("title");
    const inputDescription = document.getElementById("description");

    const duplicate = flashDuplicate.cloneNode(true);  // Membuat duplikat dari elemen asli
    const flashTitle = duplicate.querySelector("[data-title='123']"); // Mencari elemen yang akan diubah dalam duplikat

    const flashDescription = duplicate.querySelector("[data-description='123']");

    const uniqueId = Date.now();  // Membuat ID unik menggunakan timestamp
    duplicate.setAttribute('data-pair-id', uniqueId);  // Menambahkan ID unik pada duplikat

    flashTitle.innerHTML = inputTitle.value;

    const addFlashcardInput = document.getElementById("add-flashcard-input");
    addFlashcardInput.classList.remove("reveal");

    flashWrapper.appendChild(duplicate);

    // Duplicate halaman flashcard //
    const right = document.querySelector(".home");
    const flashcard = document.querySelector(".flashcard[data-pair-id='12345']");

    const flashcardCopy = flashcard.cloneNode(true);

    flashcardCopy.setAttribute('data-pair-id', uniqueId);

    home.appendChild(flashcardCopy);

    const backHome = flashcardCopy.querySelector(".back-home");
    backHome.setAttribute('data-pair-id', uniqueId);

    // Keterangan judul dan deskripsi singkat di dalam halaman flashcard
    const flashcardTitle = flashcardCopy.querySelector("[data-flashcard-title='123']");
    const flashcardDescription = flashcardCopy.querySelector("[data-flashcard-description='123']");

    flashcardTitle.innerHTML = inputTitle.value;
    flashcardDescription.innerHTML = inputDescription.value;

    inputTitle.value = "";
    inputDescription.value = "";

    backHome.addEventListener("click", () => {
        flashcardCopy.classList.add("hidden");
    });

    console.log(flashcardTitle);

    // Untuk memperbesar tampilan flashcard slider
    const fullFlash = flashcardCopy.querySelector(".full-flash");
    fullFlash.setAttribute('data-pair-id', uniqueId);

    fullFlash.addEventListener("click", () => {
        const carouselInner = flashcardCopy.querySelector(".carousel-inner");
        const card = flashcardCopy.querySelector(".card");
        const explanation = flashcardCopy.querySelector(".explanation");
        const addTermWrapper = flashcardCopy.querySelector(".add-term-wrapper");

        carouselInner.classList.toggle("full");
        card.classList.toggle("full");
        explanation.classList.toggle("hidden");
        addTermWrapper.classList.toggle("hidden");

    });

    // Mengisi kartu flashcard.
    const front = flashcardCopy.querySelector(".front")
    const back = flashcardCopy.querySelector(".back");
    front.setAttribute('data-pair-id', uniqueId);
    back.setAttribute('data-pair-id', uniqueId);

    const inputTerm = flashcardCopy.querySelector(".input-term");
    const inputExplanation = flashcardCopy.querySelector(".input-explanation");
    inputTerm.setAttribute('data-pair-id', uniqueId);
    inputExplanation.setAttribute('data-pair-id', uniqueId);

    inputTerm.addEventListener("input", () => {
        front.innerHTML = inputTerm.value;
    });

    inputExplanation.addEventListener("input", () => {
        back.innerHTML = inputExplanation.value;
    });

    // Menambahkan card
    const addFlash = flashcardCopy.querySelector(".add-flash");
    const flashcardSlider = flashcardCopy.querySelector(".flashcard-slider");

    flashcardSlider.setAttribute('data-pair-id', uniqueId);

    const uniqueClass = 'carousel-' + Date.now();

    const nextBtn = flashcardCopy.querySelector(".carousel-control-next");
    const prevBtn = flashcardCopy.querySelector(".carousel-control-prev");

    flashcardSlider.classList.add(uniqueClass);
    nextBtn.setAttribute('data-bs-target', '.' + uniqueClass);
    prevBtn.setAttribute('data-bs-target', '.' + uniqueClass);

    addFlash.addEventListener("click", () => {
        const addTermWrapper = flashcardCopy.querySelector(".add-term-wrapper");
        const addTermBox = flashcardCopy.querySelector(".add-term-box");

        const addTerm = flashcardCopy.querySelector(".add-term");
        const addTermCopy = addTerm.cloneNode(true);

        const inputTermCopy = addTermCopy.querySelector(".input-term");
        const inputExplanationCopy = addTermCopy.querySelector(".input-explanation");

        const uniquePairId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        inputTermCopy.setAttribute('data-pair-id', uniquePairId);
        inputExplanationCopy.setAttribute('data-pair-id', uniquePairId);

        inputTermCopy.value = '';
        inputExplanationCopy.value = '';

        const noSequence = addTermCopy.querySelector(".no-sequence");
        const removeAddTerm = addTermCopy.querySelector(".bx-trash-alt");
        const sumAddterm = addTermWrapper.querySelectorAll(".add-term");

        function updateSumTerm() {
            const totalAddterm = addTermWrapper.querySelectorAll(".add-term");
            flashDescription.innerHTML = `${totalAddterm.length}` + ` Istilah`;
        };

        updateSequenceNumbers()

        noSequence.textContent = sumAddterm.length + 1;

        function updateSequenceNumbers() {
            const addTermWrapper = flashcardCopy.querySelector(".add-term-wrapper");
            const allAddTerms = addTermWrapper.querySelectorAll(".add-term");

            // Loop melalui semua .add-term dan perbarui nomor urut
            allAddTerms.forEach((term, index) => {
                const noSequence = term.querySelector(".no-sequence");
                noSequence.textContent = index + 1; // Nomor urut dimulai dari 1
            });
        }

        // untuk jumlah flash card

        addTermWrapper.setAttribute('data-pair-id', uniqueId);
        addTermBox.setAttribute('data-pair-id', uniqueId);
        addTermCopy.setAttribute('data-pair-id', uniqueId);

        addTermBox.insertAdjacentElement('beforebegin', addTermCopy);

        // Tambahkan card ke slider
        const carouselItem = flashcardCopy.querySelector(".carousel-item");
        const carouselInner = flashcardCopy.querySelector(".carousel-inner");
        const carouselItemCopy = carouselItem.cloneNode(true);

        const frontCard = carouselItemCopy.querySelector(".front");
        const backCard = carouselItemCopy.querySelector(".back");

        console.log(frontCard);
        console.log(inputTermCopy);

        inputTermCopy.addEventListener("input", () => {
            frontCard.textContent = inputTermCopy.value;
        });

        inputExplanationCopy.addEventListener("input", () => {
            backCard.textContent = inputExplanationCopy.value;
        });

        frontCard.setAttribute('data-pair-id', uniquePairId);
        backCard.setAttribute('data-pair-id', uniquePairId);

        carouselItem.classList.remove("active");
        frontCard.textContent = '';
        backCard.textContent = '';

        carouselInner.appendChild(carouselItemCopy);

        removeAddTerm.addEventListener("click", () => {
            addTermCopy.remove();
            carouselItemCopy.remove();
            updateSequenceNumbers()
            updateSumTerm();
        });

        updateSumTerm();

    });

    duplicate.addEventListener("click", () => {
        flashcardCopy.classList.remove("hidden");
    });
});

