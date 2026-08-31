# Administrator Guide: Managing Members

Use **Admin Workspace → Member Directory** to create, search, review, and update club member records.

## Find a member

Select **Filter/Search** and search by:

- member number
- first name
- last name
- email address

The directory can also be sorted by member details such as member number and licence expiry dates.

Rows can be highlighted when a recorded licence is expired or approaching expiry, helping administrators identify records that may need attention.

## Create a member

1. Select **New Member**.
2. Enter the member's required identity and membership information.
3. Add contact, address, licence, membership, group, qualification, or credential information as required by your club.
4. Set the account role.
5. Set or generate an initial password when required.
6. Choose whether to send the welcome email, when available.
7. Save the member.

ClubTrack supports the following account roles in the current web app:

- **Member** — member self-service workspace
- **Range Officer** — selected operational administrator functions such as participation processing
- **Admin** — full club administration workspace

Only give elevated roles to people who need them.

## Junior members and guardians

ClubTrack treats members under 18 as junior members and supports linking them to an adult member acting as parent or guardian.

When creating or editing a junior record, make sure the guardian information and relationship are correct. The member directory highlights junior records that require an adult-member link.

When a junior becomes eligible to be treated as an adult member, ClubTrack can require confirmation before removing the junior/guardian relationship. Review this warning carefully rather than changing the date of birth to work around it.

## Edit a member

Select **Edit** beside a member to load the full member record.

Administrators can maintain information such as:

- name and date of birth
- contact details and address
- longarm and handgun licence information
- membership tier
- membership start and expiry dates
- financial status and last-payment information
- account role
- club qualifications
- external certifications and memberships
- member groups
- guardian information for junior members
- password, when an administrator-assisted reset is required

Save changes only after confirming you are editing the correct member number.

## Membership tiers and financial status

The Member Directory displays the member's configured membership tier and financial status where available.

Membership tiers are configured under **Admin Workspace → Club Settings → Member Operations**. Renewal billing and invoices are managed under **Renewals & Financials**.

Avoid using the `financial` flag as a substitute for correctly recording invoices and payments when your club uses ClubTrack's billing workflows.

## Member groups

If your club has defined member groups, you can assign them from an individual member record or use the bulk-selection tools.

To update several members:

1. select the checkboxes beside the required members;
2. select **Assign Groups**;
3. choose **Add groups**, **Remove groups**, or **Replace all groups**;
4. select the required group or groups;
5. apply the change.

Use **Replace all groups** carefully because it replaces the selected members' existing group assignments.

## Billing templates

When billing adjustment templates have been configured, the bulk tools can assign a billing template to selected members. Use this for defined club billing rules rather than manually changing every member.

## Membership cards and photos

If membership cards are enabled, the directory can provide a **Card** action for eligible members.

Administrators can also add or update a member profile photo from the Member Directory. If your club requires profile-photo approval for member-submitted photos, review member uploads through the club's document workflow.

## Delete a member

The **Delete** action removes a member record and should be treated as destructive.

Before deleting a member, confirm whether the club needs to retain their membership, participation, financial, or compliance history. In many support situations, making a record inactive or correcting its data is preferable to deletion if your club's policy allows it.

## Common checks before escalating a member issue

Confirm:

- the member number is correct;
- the user is on the correct club tenant;
- the member has the expected account role;
- the member's email address is current;
- membership and licence expiry dates are correct;
- the required feature is enabled in Club Settings;
- a junior has a valid guardian link when required.