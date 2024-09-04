import { Attraction } from "./Attraction.js";
import { Category } from "./Category.js";
import { Message } from "./Message.js";
import { Reservation } from "./Reservation.js";
import { Ticket } from "./Ticket.js";
import { User } from "./User.js";
import { ReservationHasTicket } from "./ReservationHasTicket.js";

// Relation Category - Attraction
Category.hasMany(Attraction, { foreignKey: "category_id" });
Attraction.belongsTo(Category, { foreignKey: "category_id" });

// Relation User - Reservation
User.hasMany(Reservation, { foreignKey: "user_id" });
Reservation.belongsTo(User, { foreignKey: "user_id" });

// Relation Reservation - Ticket via ReservationHasTicket
Reservation.belongsToMany(Ticket, {
  through: ReservationHasTicket,
  foreignKey: "reservation_id",
  otherKey: "ticket_id",
  as: "tickets",
});
Ticket.belongsToMany(Reservation, {
  through: ReservationHasTicket,
  foreignKey: "ticket_id",
  otherKey: "reservation_id",
  as: "reservations",
});

// Relation User - Message
User.hasMany(Message, { foreignKey: "user_id" });
Message.belongsTo(User, { foreignKey: "user_id" });

export {
  Attraction,
  Category,
  Message,
  Reservation,
  Ticket,
  User,
  ReservationHasTicket,
};
