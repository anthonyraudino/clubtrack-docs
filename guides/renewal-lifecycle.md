# Membership Renewal Lifecycle

ClubTrack brings the club's renewal queue, invoices, payments and member financial status together in one workflow. This guide explains the typical path from an approaching expiry through to a completed renewal.

## 1. Prepare membership and billing settings

Before sending renewals, administrators should confirm:

- The member has the correct membership tier
- The membership expiry date is correct
- Renewal pricing is correct
- Any applicable billing rules, levies or discounts are configured
- GST settings and pricing mode are correct for the club
- Invoice payment instructions are current
- Stripe Connect is active if the club intends to accept card payments

See [Billing Rules & Membership Tiers](./billing-rules-and-tiers.md).

## 2. Review the renewal queue

Go to **Admin Workspace → Renewals & Financials → Renewals**.

The renewal queue shows memberships approaching or passing their renewal date, together with information such as:

- Member
- Expiry
- Membership tier
- Renewal pricing
- GST and total
- Invoice/payment status

Use **Recalculate** after changing relevant membership or billing information so the renewal view reflects the latest configuration.

## 3. Generate and send renewal invoices

Administrators can send an invoice for an individual member or select multiple members and use **Send Selected**.

ClubTrack can also show **Resend** for an existing renewal invoice when another copy needs to be sent.

Before sending, check that the member has a valid email address and that the amount is correct. Do not use resend as a substitute for correcting an incorrect invoice.

## 4. The member reviews the invoice

Members go to **Member Workspace → Invoices & Renewal**.

The page shows:

- Financial or Renewal Due status
- Membership expiry
- Outstanding and paid invoice summaries
- Current invoice number and due date
- Ex-GST, GST and total values
- Amount already paid and balance due
- Payment instructions
- Invoice PDF
- Invoice history

## 5. The member pays

### Card payment

When the invoice is eligible for card payment, the member can select **Pay now** and complete the Stripe checkout.

If ClubTrack shows **Payment submitted. Waiting for confirmation from Stripe**, the checkout has completed but ClubTrack is still waiting for payment confirmation. Avoid starting another payment simply because the status has not changed immediately.

If the last attempt failed, expired or was refunded, ClubTrack can allow the member to try again or use the alternate payment instructions.

### Bank transfer or other manual payment

The member follows the payment instructions shown on the invoice. An administrator then needs to record or reconcile the payment in ClubTrack according to the club's normal process.

## 6. Record and verify payment

Go to **Renewals & Financials → Invoices**.

Administrators can search invoices and review statuses including:

- Unpaid
- Partial
- Paid
- Void

For manual payments, select **Record** and enter the payment information. Use the actual payment amount, method, reference and date so the invoice history is useful later.

An invoice should only be voided when the club intends to cancel that invoice. Voiding is not the same as marking it paid.

## 7. Confirm the member's resulting status

After the payment has been confirmed or recorded, verify:

- The invoice shows the expected paid amount and balance
- The invoice payment status is correct
- The member's financial status is correct
- The membership expiry date is correct for the renewed period
- The member's digital membership card shows the expected status where cards are enabled

ClubTrack uses the resulting invoice and member records throughout the app. If the payment is recorded correctly but the membership details are still unexpected, investigate the member record rather than creating a duplicate payment.

## Manual charges

The Renewals screen can also create a **New Manual Charge**. Manual charges are useful for items that are not the normal membership renewal, but they should be clearly described so members and administrators can distinguish them from renewal invoices.

## Common renewal problems

### The renewal amount is wrong

Check the member's tier, applicable billing rules and current financial settings. Correct the configuration before sending or reissuing an invoice.

### The member paid by bank transfer but still shows Renewal Due

Check whether the payment has been recorded against the correct invoice and whether the member's resulting financial/expiry information is correct.

### The member has no Pay now button

Card payment can be unavailable because of the invoice state or the club's Stripe configuration. Use the blocked-payment message and the invoice's alternate payment instructions.

### The member did not receive the invoice email

Confirm their email address, check that an invoice exists, and resend only after confirming you are sending the correct invoice.

## Related guides

- [Renewals & Payments](./renewals-payments.md)
- [Renewals & Financials](./admin-financials.md)
- [Billing Rules & Membership Tiers](./billing-rules-and-tiers.md)
- [Membership Cards](./membership-cards.md)
