# Attendance / LRD Export

ClubTrack's **Attendance Export** helps administrators produce a workbook of approved handgun participation records for regulatory reporting workflows.

The current export format is designed for **Victoria LRD**. Other Australian states are shown as coming soon and are not currently selectable.

ClubTrack assists with preparing the data, but the club remains responsible for reviewing the workbook and confirming that it satisfies the submission requirements that apply to the club.

## Open Attendance Export

Go to **Admin Workspace → Compliance → Attendance Export**.

The export screen lets you configure:

- From date
- To date
- Batch size
- State
- All members or selected members
- Whether members with zero participation should be included

Only approved participation records are used for the regulatory attendance export.

## Choose the date range

The screen defaults to a period beginning at the start of the current year and ending today.

Adjust **From** and **To** to match the reporting period you need. Before exporting, confirm that the dates are correct for the relevant reporting cycle.

## Export all members or selected members

By default, the export can include all applicable members.

To produce a targeted export, switch to selected members and use the member lookup to add the required people. This is useful when correcting or reviewing an individual member rather than generating a full-club workbook.

If selected-member mode is active with no members selected, ClubTrack will not start the export.

## Include members with zero participation

Enable the zero-participation option when your reporting workflow needs members to appear even when no qualifying participation was recorded in the selected period.

Use this intentionally; it can increase the size of the report and may require additional review.

## Batch size

The batch size controls how many members ClubTrack places in each workbook. The default is 250 members and the supported field range is 1–1000.

If the export requires multiple workbooks, ClubTrack packages the batches into a single ZIP download. Leaving the batch size blank requests a single workbook where supported.

## Data-quality warnings

Before export, ClubTrack checks the selected period for compliance-data problems. A warning banner may identify issues such as:

- Missing firearm class information
- Participation records with unresolved handgun classes
- Participation records linked to firearm records that no longer exist

The screen provides links to the **Firearm Registry** and **Participation Queue** to help correct these problems.

Resolve warnings before regulatory submission wherever possible. See [Participation Compliance](./participation-compliance.md) and [Firearms Records](./firearms-records.md).

## Generate the export

Select **Export Attendance**.

ClubTrack shows progress while it prepares the file. Depending on the selected data and batch size, the result will download as an Excel workbook or a ZIP containing multiple workbooks.

## Session re-verification

Because the attendance export contains sensitive member and compliance information, ClubTrack may require recent administrator verification before allowing the download.

If prompted:

1. Enter your current ClubTrack password.
2. If your account requires MFA, enter the six-digit code sent to your email.
3. After verification, ClubTrack resumes the pending export.

Do not share your password or MFA code with another administrator to let them perform an export under your account.

## Before submitting an exported workbook

Review at least the following:

1. Correct club and reporting period.
2. Expected members are present.
3. Participation dates and activities are sensible.
4. Only approved records are being relied on.
5. Handgun class information is complete.
6. Data-quality warnings have been resolved or investigated.
7. The workbook matches the current regulatory submission instructions your club is required to follow.

## Troubleshooting

### The export warns about firearm classes

Open **Firearm Registry** and correct missing Class 1–4 information, then review affected participation records.

### A participation is missing

Confirm the record is inside the selected date range and has been approved. Rejected or pending records are not treated as approved participation for the export.

### The export asks for my password again

This is expected when ClubTrack requires recent verification for a sensitive operation. Complete the re-verification prompt rather than signing in as another user.

### I need a NSW, QLD or another state format

The current Attendance Export UI supports Victoria LRD only. Other listed states are not yet available in the export selector.

## Related guides

- [Participation Compliance](./participation-compliance.md)
- [Participation Management](./admin-participations.md)
- [Firearms Records](./firearms-records.md)
- [Common Support Scenarios](./common-support-scenarios.md)
