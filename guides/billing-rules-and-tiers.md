# Billing Rules & Membership Tiers

ClubTrack separates a member's **membership tier** from reusable **billing rules**. Using both correctly helps clubs keep renewal pricing consistent while still applying levies, discounts and other adjustments where needed.

## Membership tiers

Membership tiers define the membership level assigned to a member. They are managed from **Admin Workspace → Club Settings → Member Operations**.

Use tiers for the club's actual membership categories, such as full, junior, family or another club-defined level.

When reviewing a member, make sure the assigned tier reflects their current membership arrangement before generating renewal invoices.

## Billing rules

Go to **Admin Workspace → Renewals & Financials → Billing Rules**.

Billing rules are reusable templates for invoice adjustments. A rule can represent a charge or discount and can be configured with information such as:

- Code
- Name
- Rule type, such as levy or discount
- Fixed or percentage value
- Whether the item is taxable
- Notes
- Who the rule applies to

## Who a rule can apply to

A billing rule can be configured for different scopes, including:

- Manual assignment
- All members
- Selected member groups
- Selected membership tiers

This lets a club define a rule once and apply it consistently instead of manually changing every member's renewal amount.

## Member groups versus membership tiers

Use a **membership tier** when the distinction describes what kind of membership the person holds.

Use a **member group** when the distinction is an administrative grouping that may cut across membership types.

For example, a club might have a Full membership tier while also having a Committee member group. A billing rule could target one or the other depending on the club's purpose.

## Manual billing rules

Rules configured for manual use can be assigned to individual members when needed. This is useful for one-off or selective adjustments that should still use a standard club-defined template.

Before assigning a manual rule, confirm:

1. The rule is the correct one.
2. The amount and tax treatment are current.
3. The member does not already have the same adjustment applied unintentionally.
4. The adjustment should appear on the next relevant invoice.

## Levies and discounts

Use a **levy** for an additional charge and a **discount** for a reduction.

The rule's value may be fixed or percentage-based depending on how it has been configured. Give rules clear names so members and future administrators can understand why the amount appeared on an invoice.

## GST and pricing mode

The financial area uses the club's GST and pricing settings when calculating invoice totals. Administrators should review the club's:

- GST registration setting
- GST rate
- GST-inclusive or GST-exclusive pricing mode
- Currency
- Bank/payment instructions

Do not change tax settings solely to make an individual invoice total look correct. Correct the underlying club configuration and billing rules instead.

## Invoice lead time and expiry settings

Club settings can also influence when renewals appear and how membership expiry is handled. Review the club's invoice lead time and common-expiry settings as part of the renewal setup.

After changing pricing, tiers, groups or billing rules, return to the **Renewals** tab and use **Recalculate** before sending invoices.

## Editing or deleting a rule

Before editing a rule, consider whether the change is intended for future billing or whether you are trying to correct an invoice that has already been issued.

Avoid deleting rules simply to fix a single member. First check whether the member can be removed from the rule's scope or whether a specific adjustment is more appropriate.

## Recommended setup process

1. Define the club's membership tiers.
2. Define any member groups used for administration or billing.
3. Confirm GST, currency and invoice settings.
4. Create clearly named billing rules for repeatable levies and discounts.
5. Set each rule's target scope.
6. Assign the correct tier and groups to members.
7. Recalculate the renewal queue.
8. Review sample renewals before sending invoices in bulk.

## Troubleshooting

### A member has the wrong renewal amount

Check the member's tier, group memberships and any manual billing rules before changing the invoice.

### A rule is not affecting a member

Confirm the rule's scope matches the member's current group or membership tier, or that a manual rule has actually been assigned.

### GST looks wrong

Check the club-wide GST registration, rate and pricing mode as well as whether the billing rule itself is taxable.

## Related guides

- [Membership Renewal Lifecycle](./renewal-lifecycle.md)
- [Renewals & Financials](./admin-financials.md)
- [Managing Members](./admin-members.md)
- [Club Settings](./admin-settings.md)
