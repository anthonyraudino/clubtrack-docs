# Administrator Guide: Club Settings

Use **Admin Workspace → Club Settings** to configure how ClubTrack behaves for your club.

Changes here can affect every member, administrator, kiosk, invoice, and participation workflow. Make one logical change at a time and confirm the result before moving on to unrelated settings.

## Club Profile

Use **Club Profile** for the club's public and contact information, such as:

- club name
- tagline and description
- contact email and phone
- website
- postal/address information
- social-media links

Keep support contact information current so members know where to ask club-specific questions.

## Visual Identity

Use **Visual Identity** to manage ClubTrack branding and member-facing presentation.

Available settings include club logos, colours, font, kiosk branding, and membership-card presentation. Membership-card options can control items such as card colours, labels, profile photo visibility, qualifications, membership tier, QR display, and print layout.

Preview branding changes before relying on them for printed membership cards.

## Member Operations

**Member Operations** contains many of the rules that affect day-to-day member use.

Settings include:

- club timezone and currency
- licence-expiry warning intervals
- credential reminder intervals
- whether participation approval is required
- whether self-registration is allowed
- whether credential changes require approval
- whether member-submitted profile photos require approval
- whether remote participation entry is allowed
- whether guest kiosk sign-in is allowed
- whether the kiosk automatically logs out after a participation
- whether kiosk camera scanning is available
- kiosk unlock controls
- membership billing defaults
- membership tiers
- member groups
- club qualification definitions
- club banner/message settings

### Timezone

Set the club timezone correctly. Participation dates/times, kiosk recording, and other date-sensitive workflows use the club timezone.

### Remote participation

If **Allow remote participations** is disabled, members cannot submit participation from the normal Member Workspace form and are directed to use kiosk mode or contact an administrator.

### Approval settings

When approval settings are enabled, member-submitted information may remain pending until an administrator processes it. Make sure administrators know which queues need routine review.

## Communications

Use **Communications** to configure member-facing email templates.

The current settings support templates for workflows such as:

- licence-expiry reminders
- membership renewal reminders and invoices
- guest participation approval
- welcome emails
- password reset
- newsletters
- NORI communications when the add-on is enabled

Before saving a production template, verify the subject, sender expectations, links, and club contact details.

## Match Setup

Use **Match Setup** to control what appears in participation-entry forms.

Administrators can:

- enable or disable approved matches for the club;
- filter/search the approved-match list;
- apply custom discipline names;
- apply custom match names;
- create club-specific participation entries;
- configure participation types;
- configure participation roles.

If a member or kiosk cannot find a required match, this is the first settings area to check.

## Feature Access

Use **Feature Access** to enable or disable supported ClubTrack modules for the club.

Feature flags in the current frontend include items such as:

- membership cards
- newsletters
- competitions
- range booking
- document uploads
- notifications
- audit logging

Turning a feature off can remove its menu item from the Member or Admin Workspace. Before disabling a feature, consider whether members still need access to existing data stored through it.

## Payments

Use **Payments** for payment integration and related settings.

ClubTrack includes Stripe Connect onboarding/status controls for clubs using supported card payments. Complete the onboarding process and confirm the account status before telling members to rely on **Pay now**.

Membership billing configuration also includes bank details, GST settings, pricing mode, invoice lead time, and related renewal settings.

## NORI

The **NORI** tab only appears when the NORI add-on is enabled for the club. It contains NORI-specific settings such as endorsement and membership-application configuration.

## AssetTrack settings

When the AssetTrack add-on is enabled, ClubTrack can expose asset management and asset-booking workflows. Club settings include asset hire, booking permissions, maintenance roles, register options, and label configuration.

## After changing settings

After a significant configuration change:

1. save the relevant settings section;
2. reload the affected page if necessary;
3. test with the appropriate role — member, range officer, or admin;
4. test kiosk behaviour separately when kiosk settings changed;
5. confirm a feature-gated menu item appears or disappears as expected;
6. document any club policy change that accompanies the system change.

If a change has broad operational impact, communicate it to other administrators before members encounter it.