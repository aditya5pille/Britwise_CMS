import { connectMongoDB } from "@/lib/mongodb";
import Lead from "@/models/lead";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      email,
      mobile,
      dob,
      age,
      gender,
      profession,
      maritalStatus,
      anniversaryDate,
      address,
      country,
      state,
      city,
      zipCode,
    } = await req.json();
    await connectMongoDB();
    await Lead.create({
      firstName,
      lastName,
      email,
      mobile,
      dob,
      age,
      gender,
      profession,
      maritalStatus,
      anniversaryDate,
      address,
      country,
      state,
      city,
      zipCode,
    });

    return NextResponse.json(
      { message: "Lead Added Succesfully." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while Adding The Lead." },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await connectMongoDB();
    const leads = await Lead.find({});
    return NextResponse.json({ leads }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while fetching data" },
      { status: 500 }
    );
  }
}

// export async function PUT(request) {
//   try {
//     const { id, newfirstName, newlastName } = await request.json();

//     await connectMongoDB();
//     const updatedLead = await Lead.findByIdAndUpdate(id, {
//       firstName: newfirstName,
//       lastName: newlastName,
//     }, { new: true });

//     console.log("Lead updated:", updatedLead);

//     return NextResponse.json({ message: "Lead updated" }, { status: 200 });
//   } catch (error) {
//     console.error("Error updating lead:", error);
//     return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
//   }
// }

export async function PATCH(request) {
  try {
    const { id, updates } = await request.json(); // Assuming updates contain only fields to be updated

    await connectMongoDB();

    // Construct an object with the fields to be updated
    const updateFields = {};
    if (updates.newfirstName) {
      updateFields.firstName = updates.newfirstName;
    }
    if (updates.newlastName) {
      updateFields.lastName = updates.newlastName;
    }
    if (updates.newemail) {
      updateFields.email = updates.newemail;
    }
    if (updates.newmobile) {
      updateFields.mobile = updates.newmobile; 
    }
    if (updates.newdob) {
      updateFields.dob = updates.newdob;
    }
    if (updates.newage) {
      updateFields.age = updates.newage;
    }
    if (updates.newgender) {
      updateFields.gender = updates.newgender;
    }
    if (updates.newprofession) {
      updateFields.profession = updates.newprofession;
    }
    if (updates.newmaritalstatus) {
      updateFields.maritalstatus = updates.newmaritalstatus;
    }
    if (updates.newanniversarydate) {
      updateFields.anniversarydate = updates.newanniversarydate;
    }
    if (updates.newaddress) {
      updateFields.address = updates.newaddress;
    }
    if (updates.newcountry) {
      updateFields.country = updates.newcountry;
    }
    if (updates.newstate) {
      updateFields.state = updates.newstate;
    }
    if (updates.newcity) {
      updateFields.city = updates.newcity;
    }
    if (updates.newzipcode) {
      updateFields.zipcode = updates.newzipcode;
    }

    // Use $set operator to update only specified fields
    const updatedLead = await Lead.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true }
    );

    console.log("Lead updated:", updatedLead);

    return NextResponse.json({ message: "Lead updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating lead:", error);
    return NextResponse.json(
      { error: "Failed to update lead" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Lead.findByIdAndDelete(id);
  return NextResponse.json({ message: "Lead deleted" }, { status: 200 });
}
