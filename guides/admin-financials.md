# Administrator Guide: Renewals & Financials

Use **Admin Workspace → Renewals & Financials** to manage membership renewal billing, invoices, payment recording, member adjustments, and financial reports.

The financial workspace is organised into four main tabs:

- **Renewals**
- **Invoices**
- **Billing Rules**
- **Reports**

## Check the financial summary

The summary at the top of the page provides a quick view of renewal and invoice activity, including outstanding and paid invoices and the amounts associated with them.

The page also shows the club's current pricing mode and GST configuration.

## Renewals

Use **Renewals** to identify members due for renewal and manage the club's renewal workflow.

Before generating or sending renewal billing, confirm that the member's:

- membership tier is correct;
- membership expiry date is correct;
- billing adjustments or templates are correct;
- contact email is current.

Incorrect membership data can result in an incorrect renewal invoice.

## Invoices

Use **Invoices** to manage the invoices already created for members.

Depending on the invoice and club configuration, administrators can work with invoice status, payment information, manual charges, and related billing actions.

Members can view their own invoices from **Member Workspace → Invoices & Renewal** and download invoice PDFs.

## Record payments carefully

When recording a payment manually, verify:

- the correct member;
- the correct invoice;
- payment amount;
- payment date;
- payment method or reference used by your club.

Do not mark an invoice as paid merely because a member says they initiated a transfer. Follow the club's reconciliation process.

## Card payments and Stripe

If the club has configured Stripe card payments, eligible members can see a **Pay now** action on their invoice.

Stripe integration is configured from **Admin Workspace → Club Settings → Payments**. The settings page includes Stripe Connect onboarding/status controls.

After a member completes checkout, ClubTrack may temporarily show the payment as submitted while waiting for Stripe confirmation. Avoid manually duplicating the payment while confirmation is pending unless you have independently verified the transaction.

## Billing Rules

Use **Billing Rules** to configure reusable billing logic rather than applying the same adjustments manually to many members.

The club can also define membership tiers and member groups in **Club Settings → Member Operations**, which can be used as part of membership and billing workflows.

Where billing templates are available, the Member Directory can bulk-assign them to selected members.

## GST and pricing

ClubTrack supports GST-aware invoice totals. Club settings include:

- whether the club is GST registered;
- GST rate;
- whether configured prices are GST inclusive or exclusive;
- bank/payment instructions;
- currency.

Make sure these settings reflect the club's actual accounting treatment before issuing invoices. If you are unsure about the tax treatment, confirm it with the club's accountant or bookkeeper rather than changing ClubTrack settings based on assumption.

## Reports

Use **Reports** for financial reporting available to your club configuration.

Reconcile ClubTrack financial information against the club's accounting and payment-provider records as part of normal financial administration.

## Troubleshooting a member balance

If a member says their balance is wrong:

1. open their invoice history;
2. confirm the invoice number and line items;
3. confirm any payments already recorded;
4. check whether a Stripe payment is still awaiting confirmation;
5. confirm their membership tier and billing adjustments;
6. compare the payment against bank/Stripe records;
7. correct the ClubTrack record only after the source of the discrepancy is understood.

Keep an audit trail or internal note where your club's process requires one.