# Membership Cards

ClubTrack can provide digital and printable membership cards when the **Membership Cards** feature is enabled for your club.

Cards can display club branding, member identity, membership expiry, membership tier, qualifications, a profile photo and a live kiosk QR code depending on the club's card settings.

## For members

Go to **Member Workspace → Membership Card**.

Your card can show:

- Club name and logo
- Your name and member number
- Membership expiry
- Membership tier
- Qualifications
- Profile photo
- Membership status
- Kiosk QR code

The exact layout depends on your club's configuration.

### Card status

ClubTrack can show statuses such as:

- **Active member** — the membership is active, financial and not expired
- **Payment outstanding** — the account is active but the member is not currently financial
- **Expired** — the membership expiry date has passed

If the status is unexpected, check your invoice and membership expiry information before contacting the club.

### Print or download your card

The Membership Card page lets you:

1. Choose whether the live kiosk QR should be included.
2. Print the card from your browser.
3. Download a PDF copy.

The kiosk QR should be treated as a credential. Do not publish a card containing the QR or leave printed copies where others can use them.

## Profile photos

If your club displays photos on membership cards, the card uses the profile photo available to ClubTrack.

When profile-photo approval is enabled, a newly uploaded photo can remain **Pending approval** until an administrator reviews it. If an older approved photo exists, ClubTrack may continue using that approved photo while the replacement is pending.

Administrators review profile photos from **Admin Workspace → Documents**.

See [Documents & Membership Card](./documents-and-card.md) for upload requirements.

## For administrators

Go to **Admin Workspace → Members → Membership Cards**.

The card-management screen is designed for preparing and printing cards in batches.

### Find members

Search by member number, first name, last name or email. You can filter the current results by:

- Eligible
- All members
- Missing photo
- Missing expiry
- Expired

A member must have a current membership expiry to be selectable for batch card printing. A missing photo is shown as a remediation issue but does not necessarily prevent the card from being selected if the membership expiry is current.

### Select cards for printing

Administrators can:

- Select eligible members on the current page
- Select all eligible members matching the current search
- Clear the selection
- Choose whether the live kiosk QR is included
- Preview selected cards
- Print selected cards
- Download a print-ready batch PDF

### Remediation CSV

Use **Export remediation CSV** to identify members with card-data issues such as:

- Missing membership expiry
- Expired membership
- Missing profile photo

This can be useful before a large card-printing run.

## Why a card may be missing or incorrect

Check the following:

1. **Membership Cards is enabled** for the club.
2. The member has a valid membership expiry date.
3. The member's financial status is correct.
4. The correct membership tier is assigned.
5. Any required profile photo has been uploaded and, if necessary, approved.
6. Qualifications expected on the card are recorded on the member.
7. The club's card presentation settings allow the relevant information to be shown.

## Related guides

- [Documents & Membership Card](./documents-and-card.md)
- [Renewals & Payments](./renewals-payments.md)
- [Membership Renewal Lifecycle](./renewal-lifecycle.md)
- [Managing Members](./admin-members.md)
