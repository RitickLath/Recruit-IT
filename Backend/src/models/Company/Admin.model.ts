import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    Credentials: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Credentials",
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;

/*
 Admin Schema Details:
1 Credential (OnjectId) - Referecne to Credential.
2 companyId (ObjectId) - References the associated company (if applicable).
*/
