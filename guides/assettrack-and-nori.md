# AssetTrack & NORI Add-ons

**AssetTrack** and **NORI** are optional ClubTrack modules. They only appear when the relevant add-on is enabled for the club and the signed-in user has the required role or workspace access.

This guide gives administrators and authorised operators an overview of the main workflows. Your club may not have one or both modules enabled.

# AssetTrack

AssetTrack is ClubTrack's asset register and operational checkout/return module for club equipment.

## AssetTrack Manage

Go to **Admin Workspace → AssetTrack → AssetTrack Manage**.

The asset register can store equipment such as:

- Firearms
- Spare parts
- Tablets
- Target systems
- Safes
- Keys
- Radios
- Range equipment
- IT equipment
- Other club-defined assets

Administrators can add and edit register information including:

- Asset name and internal asset ID
- Asset type
- Serial number where applicable
- Brand and model
- Purchase date, supplier and warranty information
- Status and location
- Assigned owner/custody information
- Condition and inspection information
- Compliance information
- Financial values and hire cost
- Notes

Firearm assets can also track information such as magazine count and a maintenance schedule.

## Asset lifecycle and condition

AssetTrack separates lifecycle **status** from physical **condition**.

Typical lifecycle statuses include:

- Purchased
- Received
- In service
- Maintained
- Under repair
- Retired
- Disposed
- Lost

Typical conditions include:

- New
- Good
- Fair
- Poor
- Damaged
- Unsafe
- Retired

Keep these fields accurate so operators can distinguish an available asset from one that should not be issued.

## Maintenance records

AssetTrack supports maintenance records and scheduled servicing. Use maintenance entries to record work performed, relevant notes and the next service due date where applicable.

For safety-critical equipment, ClubTrack should support—not replace—the club's required inspection and maintenance procedures.

## Asset labels, QR codes and imports

AssetTrack can generate asset labels and QR codes and supports CSV-based register workflows. Labels make it easier to find the correct record during range operations.

Treat printed codes as operational identifiers. Do not place sensitive information directly into an asset name or public-facing label unnecessarily.

## AssetTrack Bookings

Go to **Admin Workspace → AssetTrack → AssetTrack Bookings**.

The bookings screen lets authorised operators:

- Search assets
- Filter by asset type, availability and condition
- Select an asset manually
- Scan an asset QR code or supported barcode
- Check an asset out to a member
- Check an asset back in

### Check out an asset

Select or scan the asset, then choose the hirer from the member lookup.

The checkout workflow can record:

- Hirer
- Approving operator
- Expected return date
- Condition on issue
- Notes
- POS transaction number

Where hire pricing applies, AssetTrack uses the asset-specific hire cost when set, otherwise the club's configured default hire fee can be used.

A POS transaction number is required by the current checkout workflow. Record the actual transaction reference used by the club rather than entering placeholder data.

### Check an asset back in

On return, record the asset's location, condition on return and any notes.

For a firearm asset with magazines recorded, ClubTrack requires confirmation that all magazines are present before completing check-in.

If an asset returns damaged, unsafe or incomplete, record the condition accurately and follow the club's operational escalation process rather than immediately returning it to service.

## AssetTrack access

AssetTrack pages require the Asset Management add-on. Booking access can also depend on the club's Asset Booking setting and the allowed operator roles configured under Club Settings.

# NORI

The NORI module provides a controlled workspace for managing NORI attendance, endorsement readiness and membership applications.

Access is restricted. A user may have a Member, Range Officer or Admin account and still not see the NORI Workspace unless the add-on and NORI access permission are both available to them.

## NORI Directory

Open the **NORI Workspace** and select **Recent attendance**.

Authorised users can search/filter the directory using information such as:

- Recent attendance window
- Email
- First name
- Last name

The directory shows attendance totals and the person's endorsement, application and converted-member status.

Select a person to review their NORI profile and relevant workflow information.

## Comments and review information

Authorised NORI users can add comments to a profile as part of the club's review process. Use comments for relevant operational information and avoid recording unnecessary sensitive personal information.

The workspace can also display flags that authorised staff may need to consider when processing the NORI workflow. Handle this information according to your club's privacy, records and access policies.

## Endorsement readiness

ClubTrack tracks an endorsement status and only enables the endorsement action when the profile is eligible according to the configured NORI workflow.

When eligible, an authorised user can endorse the profile and optionally record supporting notes.

Administrators configure the required NORI attendance level in **Club Settings → NORI**. The current default configuration uses six attendances unless the club changes it.

The configured ClubTrack threshold supports the workflow; the club remains responsible for ensuring its real-world endorsement process satisfies applicable requirements.

## Eligibility email

After the relevant stage is reached, authorised users can send the NORI eligibility email from the profile. ClubTrack records whether an eligibility email has been sent.

Before sending, confirm the person's email address and status are correct.

## Membership applications

Select **Membership Applications** in the NORI Workspace.

Applications are grouped into areas such as:

- Active / Submitted
- Approved
- Rejected

The application view includes the applicant, submission information, payment status/amount and application status.

Authorised users can review an application and perform the available approval or rejection action according to the club's process.

## NORI settings

Administrators configure the module from **Admin Workspace → Club Settings → NORI**.

Settings include:

- Endorsement attendance level
- Default membership tier for successful applications
- Joining fee
- Membership fee
- NORI instructors

The joining and membership fee settings form the application amount shown by the NORI workflow.

### NORI instructors

Administrators can search the Member Directory and add eligible members as NORI instructors, or remove existing instructor assignments.

Only assign this access to people who should participate in the club's NORI workflow.

## Add-on troubleshooting

### AssetTrack or NORI does not appear

Check that the add-on is enabled for the club and that the user's role/access permits the relevant workspace. Sign out and back in after changing access.

### An AssetTrack asset cannot be checked out

Check its availability, condition, booking settings, operator role and required checkout information such as the hirer and POS transaction number.

### A firearm cannot be checked back in

If magazines are recorded for the firearm, confirm all magazines are present before completing check-in.

### A NORI user cannot endorse a profile

Check the profile's endorsement status and whether it has reached the club's configured endorsement level. The endorsement action is only available when ClubTrack considers the profile eligible.

### A NORI user cannot enter the workspace

Check both the NORI add-on and the person's explicit NORI workspace access; role alone is not sufficient in every case.

## Related guides

- [Roles & Feature Availability](./features-and-access.md)
- [Club Settings](./admin-settings.md)
- [Managing Members](./admin-members.md)
- [Common Support Scenarios](./common-support-scenarios.md)
