# Common Support Scenarios

This guide covers common ClubTrack support questions and the first checks to perform before escalating an issue.

## I cannot see a menu item or page

ClubTrack navigation depends on your role, enabled club features and optional add-ons.

Check:

1. You are signed into the correct club tenant.
2. Your account has the expected Member, Range Officer or Admin role.
3. The relevant feature or add-on is enabled for the club.
4. You have permission to use the add-on workspace where additional access controls apply.
5. You have signed out and back in after a recent role/access change.

Pinning a navigation item does not grant permission to use it.

See [Roles & Feature Availability](./features-and-access.md).

## My profile change has not appeared

Go to **Member Workspace → My Requests**.

Contact, address and some credential changes may require administrator approval. If the request is still pending, the old value can remain active until the club processes the request.

Administrators should check **Members → Change Requests**.

See [Membership Change Requests](./membership-change-requests.md).

## My participation is still pending or not counted

Check **Member Workspace → Participation History** for the participation status.

If the club requires approval, a pending record will not be treated the same way as an approved record in compliance and regulatory workflows.

Administrators should review **Participation Queue** and either approve or reject the record after verifying it.

See [Participation](./participation.md) and [Participation Management](./admin-participations.md).

## My participation compliance status looks wrong or says Unknown

Check for warnings on **Admin Workspace → Participation Compliance**.

The most common causes are:

- A handgun is missing Class 1–4 information
- A participation has no resolvable handgun class
- A firearm used by an old participation was deleted
- A participation is pending, rejected or recorded in a different year
- The wrong match, role or firearm was recorded

Correct the source data rather than trying to manually alter the compliance result.

See [Participation Compliance](./participation-compliance.md) and [Firearms Records](./firearms-records.md).

## My membership card is missing or says Payment outstanding

Check:

- Membership Cards is enabled for the club
- Your membership expiry is current
- Your financial status is correct
- Your renewal invoice has been paid/recorded correctly
- Your profile photo is approved if the club requires photo approval

A card can show **Payment outstanding** when the membership record is active but the member is not financial.

See [Membership Cards](./membership-cards.md).

## I paid by bank transfer but ClubTrack still shows Renewal Due

Bank transfers are not automatically the same thing as a recorded ClubTrack payment.

An administrator should locate the correct invoice under **Renewals & Financials → Invoices**, confirm the payment received by the club, and record/reconcile it against that invoice. Then check the member's financial status and membership expiry.

Do not create a second invoice just because the first one still appears unpaid.

See [Membership Renewal Lifecycle](./renewal-lifecycle.md).

## Card payment says submitted but the invoice is not paid yet

If ClubTrack says **Payment submitted. Waiting for confirmation from Stripe**, checkout has completed but ClubTrack is still waiting for payment confirmation.

Do not immediately pay again. Refresh/revisit the invoice and allow the payment status to update. If it remains unresolved, an administrator should review the invoice and the club's Stripe Connect status.

## My kiosk PIN or QR code does not work

Members can manage their kiosk PIN under **Member Workspace → Security & Kiosk PIN**.

Check that:

- A kiosk PIN is set
- It is numeric and 4–6 digits
- You are entering the correct member number
- You are using the current QR generated from your account
- The kiosk has not timed out or returned to its sign-in screen

The kiosk QR contains sign-in information and should be protected like a credential.

See [Using the Club Kiosk](./kiosk.md).

## My linked junior is missing

Members cannot create the guardian relationship themselves.

An administrator should open the junior in **Member Directory** and confirm that the correct adult member is linked as the guardian with the intended relationship.

Avoid creating duplicate member accounts to fix a missing link.

See [Junior Members & Guardians](./juniors-and-guardians.md).

## My profile photo is still pending

If the club requires profile-photo approval, new photos remain pending until an administrator processes them under **Admin Workspace → Documents**.

The existing approved photo may continue to appear while a replacement is pending.

See [Documents & Membership Card](./documents-and-card.md).

## Attendance Export shows data-quality warnings

Do not ignore the warnings simply to produce the workbook.

Use the links from the warning banner to review firearm classes and participation data. After correcting the records, re-run Participation Compliance and then generate the export again.

See [Attendance / LRD Export](./attendance-lrd-export.md).

## A role was changed but the old access is still showing

Sign out and sign back in so the session is rebuilt with the current account permissions. If the issue remains, an administrator should verify the member role and any add-on-specific permissions.

## What to include when contacting support

Provide:

- Club name/tenant
- Your role
- Member number where relevant
- The page or workflow you were using
- What you expected to happen
- What actually happened
- The exact error message shown
- Approximate date/time of the issue
- Whether the issue happens again after signing out and back in

Screenshots can help, but remove or obscure sensitive information that support does not need.

Never send your password, MFA code, kiosk PIN, Stripe credentials or other authentication secrets in a support request.
