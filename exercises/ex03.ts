interface PaymentInformation {
  isPayed: boolean;
  totalPrice: number;
}

interface Reservation {
  customerInformation: string;
  paymentInformation: PaymentInformation;
  checkOut: Date;
  checkIn: Date;
  pricePerDay: number;
}

const reservation1: Reservation = {
  customerInformation: "Miru",
  paymentInformation: {
    isPayed: true,
    totalPrice: 0,
  },
  checkIn: new Date("2026-08-01"),
  checkOut: new Date("2026-08-03"),
  pricePerDay: 100,
};

const reservation2: Reservation = {
  customerInformation: "Kazi",
  paymentInformation: {
    isPayed: false,
    totalPrice: 0,
  },
  checkIn: new Date("2026-08-05"),
  checkOut: new Date("2026-08-08"),
  pricePerDay: 120,
};

const reservations: Reservation[] = [reservation1];

function calculateTotalPrice(reservation: Reservation): number {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  const numberOfDays =
    (reservation.checkOut.getTime() - reservation.checkIn.getTime()) /
    millisecondsPerDay;

  return numberOfDays * reservation.pricePerDay;
}

reservation1.paymentInformation.totalPrice =
  calculateTotalPrice(reservation1);

reservation2.paymentInformation.totalPrice =
  calculateTotalPrice(reservation2);

reservations.push(reservation2);

reservations.forEach((reservation) => {
  console.log(reservation);
  console.log(reservation.customerInformation);
});