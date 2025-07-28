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
        "picked up",
        "processing",
        "out for delivery",

        "received",
        "ready for pickup",
        "ready for claim",
      ],
    },
    notes: {
      type: String,
    },
    items: [
      {
        name: String,
        quantity: Number,
        // price, serviceType, etc.
      },
    ],
    totalPrice: {
      type: Number,
      default: 0,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
