# Firearms Records

ClubTrack can record member firearms and club-owned firearms so they can be referenced in participation, compliance and range-management workflows.

Accurate handgun class information is particularly important because ClubTrack uses it when calculating participation compliance.

## For members: My Firearms

Go to **Member Workspace → My Firearms**.

You can register, edit and delete firearms associated with your member account.

### Register a firearm

Select **Register New Firearm** and enter:

- Name/model
- Optional additional model information
- Serial number
- Type: Longarm or Handgun
- LRD handgun class for a handgun, where applicable
- Optional notes

For handguns, the available LRD class values are Class 1, Class 2, Class 3 and Class 4.

Select **Register** to save the firearm.

### Edit a firearm

Use **Edit** when information such as the model, serial number, type or handgun class needs to be corrected.

Where possible, correct an existing record instead of deleting it and creating a replacement. Historical participation may already reference that firearm.

### Delete a firearm

Deleting a firearm is permanent from the My Firearms screen. Use this carefully.

A deleted firearm can leave older participation records without their original firearm reference. This can create compliance data-quality warnings. If a firearm has already been used on participation records, contact a club administrator before deleting it when practical.

## Why handgun class information matters

ClubTrack can use the recorded firearm class to determine which class a handgun participation belongs to. If the class is missing and cannot be resolved from the participation or approved match, the compliance report can show an **Unknown** or incomplete result.

If your annual class totals look wrong, first check that every relevant handgun has the correct class.

See [Participation Compliance](./participation-compliance.md).

## For administrators: Firearm Registry

Go to **Admin Workspace → Activity → Firearm Registry**.

The registry lets administrators manage both member and club-owned firearm records.

You can:

- Search firearms
- Filter by member
- Filter by reported status
- Filter between club-owned and member-owned firearms
- Add a firearm
- Edit or delete a firearm
- Export the firearm list to CSV

## Add a member firearm

When adding a member-owned firearm, select the member from the member lookup and enter the firearm details.

Confirm you have selected the correct member before saving, particularly where members have similar names.

## Add a club-owned firearm

Enable **Club-owned firearm** when the firearm belongs to the club rather than an individual member.

Club-owned firearm records are intended for club/range equipment workflows and can be visible to members where ClubTrack uses those records operationally.

## Reported status

The registry includes an action to mark a firearm as reported to Victoria Police.

**Important:** in the current ClubTrack frontend, this action marks the firearm record as reported in ClubTrack. Do not treat the button itself as proof that ClubTrack electronically submitted a report to Victoria Police. Your club should retain and follow its actual regulatory reporting process and evidence.

## Export CSV

Use **Export CSV** to download registry information. Active member and reported-status filters can affect the export.

Treat exported firearm information as sensitive club data and store or share it according to your club's privacy and security procedures.

## Data cleanup after a deleted firearm

If participation records reference a firearm that no longer exists, ClubTrack can surface an orphan-firearm warning in compliance checks.

Administrators should:

1. Identify the affected member and participation.
2. Confirm what firearm/class was actually used.
3. Correct the participation or related data using the appropriate administration workflow.
4. Re-run the Participation Compliance report.
5. Re-check Attendance Export warnings before regulatory submission.

## Related guides

- [Participation](./participation.md)
- [Participation Compliance](./participation-compliance.md)
- [Attendance / LRD Export](./attendance-lrd-export.md)
- [Participation Management](./admin-participations.md)
