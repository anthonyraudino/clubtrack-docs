# Using the Club Kiosk

ClubTrack kiosk mode is designed for on-site participation entry. Your club controls whether QR scanning, guest sign-in, kiosk locking, and automatic logout are enabled.

## Open kiosk mode

An administrator can open **Admin Workspace → Kiosk Launch** to start the club kiosk with the correct tenant and access settings.

For a shared device, fullscreen mode is recommended so the kiosk remains focused on sign-in and participation entry.

## Kiosk unlock PIN

Your club may require an operator-level **Kiosk Unlock PIN** before members or guests can sign in.

This PIN is different from an individual member's kiosk PIN. It is configured by a club administrator and unlocks the kiosk device for a limited session.

If the kiosk displays **Kiosk Locked**:

1. Enter the club kiosk unlock PIN.
2. Select **Unlock Kiosk**.
3. Continue to the member/guest sign-in screen.

## Sign in with a membership-card QR code

If camera scanning is enabled:

1. Select **Start Camera Scan**.
2. Allow camera access if your browser asks.
3. Hold the membership-card or kiosk QR code inside the camera frame.
4. Wait for ClubTrack to identify and sign in the member.

Camera access works best over HTTPS. If scanning does not work, use manual sign-in instead.

## Manual member sign-in

1. Enter the member number.
2. Enter the member's **4–6 digit kiosk PIN**.
3. Select **Sign In**.

Members can set their PIN under **Member Workspace → Security & Kiosk PIN**.

## Record a participation

After signing in:

1. choose the discipline;
2. choose the match or activity;
3. choose the participation role;
4. select a firearm if applicable;
5. enter a score or notes when needed;
6. submit the participation.

The available disciplines, matches, roles, and firearms come from the club and member records in ClubTrack.

If a selected handgun and match use different LRD handgun classes, ClubTrack can warn about the mismatch before the entry is submitted.

## Guest sign-in

A **Guest Sign-In** button only appears when the club has enabled guest kiosk sign-in.

The guest identity step asks for:

- full name
- email
- phone
- optional home club
- optional external member number

The guest then records their activity through the kiosk participation form. Guest entries can be reviewed by club staff in the Participation Queue.

## Automatic logout and timeouts

Kiosk sessions are intentionally temporary. ClubTrack can:

- end a signed-in member session after a period of inactivity;
- automatically sign a member out after recording a participation, when configured by the club;
- clear the kiosk member session if fullscreen is exited, as a safety measure.

If a session times out, simply sign in again.

## Camera troubleshooting

If the camera scanner does not start:

- make sure the browser has permission to use the camera;
- make sure another application is not already using the camera;
- use HTTPS where possible;
- check that the device actually has an available camera;
- use manual member-number/PIN sign-in if scanning is unavailable.

Common browser camera errors can indicate permission denied, no camera found, the camera already being in use, or an unsupported camera configuration.

## Shared-device safety

When using a kiosk on a shared device:

- do not leave an authenticated member session unattended;
- use the kiosk logout/exit controls when finished;
- do not expose a member's PIN or QR code;
- keep the club kiosk unlock PIN limited to authorised operators.