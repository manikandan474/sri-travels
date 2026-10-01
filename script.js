/* =========================================
   SRI TRAVELS
   FRONTEND ONLY
========================================= */


/* ================= VEHICLES ================= */

const vehicles = [

    {
        id: 1,

        name: "Red Coach Bus",

        type: "coach",

        label: "COACH BUS",

        seats: 20,

        price: 8500,

        image: "./images/red-coach.jpg",

        video: "./videos/red-coach.mp4",

        description:
            "Comfortable and spacious 20-seater coach bus. Perfect for group travel, family trips and long journeys."
    },


    {
        id: 2,

        name: "Blue Coach Bus",

        type: "coach",

        label: "COACH BUS",

        seats: 20,

        price: 8000,

        image: "./images/blue-coach.jpg",

        description:
            "Spacious 20-seater coach bus for comfortable group travel."
    },


    {
        id: 4,

        name: "Toyota Etios",

        type: "car",

        label: "CAR",

        seats: 4,

        price: 3500,

        image: "./images/etios.jpg",

        description:
            "Reliable and comfortable 4-seater car with AC for city and long-distance travel."
    }

];



/* ================= SELECTED VEHICLE ================= */

let selectedVehicleId = null;



/* ================= DISPLAY VEHICLES ================= */

function displayVehicles(list) {

    const grid =
        document.getElementById("vehicleGrid");


    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `

            <p class="empty">
                No vehicles found for your search.
            </p>

        `;

        return;

    }


    list.forEach(vehicle => {

        const card =
            document.createElement("div");


        card.className =
            "vehicle-card";


        card.innerHTML = `

            <img
                src="${vehicle.image}"
                alt="${vehicle.name}"
                onerror="this.src='${vehicle.image}'"
            >


            <div class="vehicle-type">

                ${vehicle.label}

            </div>


            <h3>

                ${vehicle.name}

            </h3>


            <div class="vehicle-details">

                🚘 ${vehicle.seats} Seats

                &nbsp;&nbsp;

                ❄ AC

            </div>


            <div class="vehicle-price">

                <strong>

                    ₹${vehicle.price.toLocaleString("en-IN")}

                </strong>

                / day


                <span class="available">

                    Available

                </span>

            </div>

        `;


        card.addEventListener(
            "click",
            function() {

                selectVehicle(vehicle.id);

            }
        );


        grid.appendChild(card);

    });

}



/* ================= VEHICLE DROPDOWN ================= */

function loadVehicles() {

    const dropdown =
        document.getElementById("vehicle");


    vehicles.forEach(vehicle => {

        const option =
            document.createElement("option");


        option.value =
            vehicle.id;


        option.textContent =
            `${vehicle.name} - ₹${vehicle.price.toLocaleString("en-IN")}/day`;


        dropdown.appendChild(option);

    });

}



/* ================= VEHICLE CLICK ================= */

function selectVehicle(id) {

    const vehicle =
        vehicles.find(
            v => v.id === id
        );


    if (!vehicle) {

        return;

    }


    selectedVehicleId =
        id;


    /* Vehicle name */

    document.getElementById(
        "vehicleName"
    ).textContent =
        vehicle.name;


    /* Vehicle type */

    document.getElementById(
        "vehicleType"
    ).textContent =
        vehicle.label;


    /* Seats */

    document.getElementById(
        "vehicleSeats"
    ).textContent =
        vehicle.seats;


    /* Price */

    document.getElementById(
        "vehiclePrice"
    ).textContent =
        "₹" +
        vehicle.price.toLocaleString("en-IN");


    /* Description */

    document.getElementById(
        "vehicleDescription"
    ).textContent =
        vehicle.description;


    /* Video */

    const video =
        document.getElementById(
            "vehicleVideo"
        );


    if (vehicle.video) {

        video.src =
            vehicle.video;

        video.style.display =
            "block";

    }

    else {

        video.pause();

        video.removeAttribute("src");

        video.style.display =
            "none";

    }


    /* Open popup */

    document
        .getElementById("vehicleModal")
        .classList
        .add("show");


    /* Load video */

    video.load();


    /* Try autoplay */

    video.play()
        .catch(
            () => {}
        );

}



/* ================= CLOSE VEHICLE POPUP ================= */

function closeVehicleModal() {

    const modal =
        document.getElementById(
            "vehicleModal"
        );


    const video =
        document.getElementById(
            "vehicleVideo"
        );


    video.pause();

    video.removeAttribute(
        "src"
    );


    modal.classList.remove(
        "show"
    );

}



/* ================= BOOK SELECTED VEHICLE ================= */

function bookSelectedVehicle() {

    if (!selectedVehicleId) {

        return;

    }


    document.getElementById(
        "vehicle"
    ).value =
        selectedVehicleId;


    closeVehicleModal();


    goToBooking();

}



/* ================= SEARCH ================= */

function searchVehicles() {

    const type =
        document.getElementById(
            "searchType"
        ).value;


    const passengers =
        Number(
            document.getElementById(
                "searchPassengers"
            ).value
        );


    let result =
        vehicles;


    /* Filter vehicle type */

    if (type !== "all") {

        result =
            result.filter(
                vehicle =>
                    vehicle.type === type
            );

    }


    /* Filter passengers */

    if (passengers > 0) {

        result =
            result.filter(
                vehicle =>
                    vehicle.seats >= passengers
            );

    }


    displayVehicles(
        result
    );


    goToVehicles();

}



/* ================= NAVIGATION ================= */

function goToVehicles() {

    document
        .getElementById(
            "vehicles"
        )
        .scrollIntoView({
            behavior: "smooth"
        });

}



function goToBooking() {

    document
        .getElementById(
            "booking"
        )
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ================= BOOKING ================= */

document
    .getElementById(
        "bookingForm"
    )
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const vehicleId =
                Number(
                    document.getElementById(
                        "vehicle"
                    ).value
                );


            const vehicle =
                vehicles.find(
                    v =>
                        v.id === vehicleId
                );


            if (!vehicle) {

                alert(
                    "Please select a vehicle."
                );

                return;

            }


            const pickup =
                document.getElementById(
                    "pickupDate"
                ).value;


            const returnDate =
                document.getElementById(
                    "returnDate"
                ).value;


            if (returnDate < pickup) {

                alert(
                    "Return date cannot be before pickup date."
                );

                return;

            }


            const booking = {

                id:
                    "SRI" +
                    Date.now(),

                name:
                    document.getElementById(
                        "name"
                    ).value,

                phone:
                    document.getElementById(
                        "phone"
                    ).value,

                email:
                    document.getElementById(
                        "email"
                    ).value,

                vehicle:
                    vehicle.name,

                pickupDate:
                    pickup,

                returnDate:
                    returnDate,

                pickupLocation:
                    document.getElementById(
                        "pickupLocation"
                    ).value,

                destination:
                    document.getElementById(
                        "destination"
                    ).value,

                status:
                    "Pending"

            };


            /* Get old bookings */

            let bookings =
                JSON.parse(
                    localStorage.getItem(
                        "sriTravelsBookings"
                    )
                ) || [];


            /* Add new booking */

            bookings.push(
                booking
            );


            /* Save */

            localStorage.setItem(
                "sriTravelsBookings",
                JSON.stringify(
                    bookings
                )
            );


            alert(

                "Booking Successful!\n\n" +

                "Booking ID: " +

                booking.id

            );


            /* Reset form */

            document
                .getElementById(
                    "bookingForm"
                )
                .reset();


            /* Refresh bookings */

            showBookings();

        }
    );



/* ================= SHOW BOOKINGS ================= */

function showBookings() {

    const list =
        document.getElementById(
            "bookingList"
        );


    const bookings =
        JSON.parse(
            localStorage.getItem(
                "sriTravelsBookings"
            )
        ) || [];


    if (bookings.length === 0) {

        list.innerHTML = `

            <p class="empty">

                No bookings available.

            </p>

        `;

        return;

    }


    list.innerHTML = "";


    bookings
        .slice()
        .reverse()
        .forEach(
            booking => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "booking-item";


                item.innerHTML = `

                    <h3>

                        Booking ID:
                        ${booking.id}

                    </h3>


                    <p>

                        <b>Name:</b>
                        ${booking.name}

                    </p>


                    <p>

                        <b>Vehicle:</b>
                        ${booking.vehicle}

                    </p>


                    <p>

                        <b>Date:</b>
                        ${booking.pickupDate}

                        →

                        ${booking.returnDate}

                    </p>


                    <p>

                        <b>Route:</b>
                        ${booking.pickupLocation}

                        →

                        ${booking.destination}

                    </p>


                    <p>

                        <b>Status:</b>
                        ${booking.status}

                    </p>

                `;


                list.appendChild(
                    item
                );

            }
        );

}



/* ================= ADMIN ================= */

function openAdmin() {

    document
        .getElementById(
            "adminModal"
        )
        .classList
        .add("show");

}



function closeAdmin() {

    document
        .getElementById(
            "adminModal"
        )
        .classList
        .remove("show");

}



function adminLogin() {

    const id =
        document.getElementById(
            "adminId"
        ).value;


    const password =
        document.getElementById(
            "adminPassword"
        ).value;


    if (
        id === "admin" &&
        password === "admin123"
    ) {

        const bookings =
            JSON.parse(
                localStorage.getItem(
                    "sriTravelsBookings"
                )
            ) || [];


        alert(

            "Admin Login Successful!\n\n" +

            "Total Bookings: " +

            bookings.length

        );


        closeAdmin();

    }

    else {

        alert(
            "Invalid Admin ID or Password."
        );

    }

}



/* ================= CLOSE POPUPS WHEN CLICKING OUTSIDE ================= */

document
    .getElementById(
        "vehicleModal"
    )
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeVehicleModal();

            }

        }
    );



document
    .getElementById(
        "adminModal"
    )
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeAdmin();

            }

        }
    );



/* ================= INITIAL LOAD ================= */

displayVehicles(
    vehicles
);

loadVehicles();

showBookings();