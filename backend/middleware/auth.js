import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    dateCreated: {
      type: Date,
      default: Date.now,
      required: true,
    },
    type: {
      type: String,
      enum: ["pick up", "drop off"],
      required: true,
    },
    // Only required if type is "drop off"
    location: {
      type: String,
      required: function () {
        return this.type === "drop off";
      },
    },
    // Status depends on type
    status: {
      type: String,
      required: true,
      enum: [
        // For pick up
        "picked up",
        "processing",
        "out for delivery",
        // For drop off
        "received",
        "ready for pickup",
        "ready for claim",
      ],
    },
    notes: {
      type: String,
    },
    // Optionally, link to customer
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);