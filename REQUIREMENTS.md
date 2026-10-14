# FindIt Lost & Found — Requirements

## 1. Purpose and Users

- **REQ-001 (Must):** The application shall let visitors browse reported Lost and Found items.
- **REQ-002 (Must):** The application shall let visitors search items by name.
- **REQ-003 (Must):** The application shall let visitors filter items by Lost or Found status.
- **REQ-004 (Must):** The application shall let visitors report a Lost or Found item.
- **REQ-005 (Must):** The application shall display basic information for each reported item.
- **REQ-006 (Must):** The application shall retain submitted items for future sessions in the same browser, subject to the persistence requirements in Section 5.
- **REQ-007 (Must):** A visitor shall be able to use the application without registering, logging in, or having a user account.

## 2. Item Data and Display

- **REQ-008 (Must):** Each item shall contain an item name, a status, a location, a date, and an image.
- **REQ-009 (Must):** An item's status shall be either `Lost` or `Found`.
- **REQ-010 (Must):** The application shall display reported items as visual cards.
- **REQ-011 (Must):** Each item card shall show the item's image, name, status, location, and date.
- **REQ-012 (Must):** The item display shall make Lost items distinguishable from Found items.
- **REQ-013 (Must):** The displayed item information shall let a user understand what was lost or found and where and when it was reported.
- **REQ-014 (May):** The application may provide predefined example items when opened for the first time.
- **REQ-015 (Must, conditional on REQ-014):** If predefined items are provided, they shall be searchable and filterable in the same way as user-added items.
- **REQ-016 (Implementation choice):** If predefined items are provided, their number, names, locations, dates, and images are not prescribed by the BRD.

## 3. Search and Filtering

- **REQ-017 (Must):** The application shall allow the user to search items by item name.
- **REQ-018 (Must):** Search results shall retain items whose names match the entered search text and exclude items whose names do not match it.
- **REQ-019 (Must):** Search shall support matching less than the complete item name. For example, searching for `wallet` shall be able to match `Black Wallet`.
- **REQ-020 (Must):** Search matching shall be case-insensitive.
- **REQ-021 (Must):** The status filter shall provide options to show all items, Lost items only, or Found items only.
- **REQ-022 (Must):** With the Lost filter selected, only Lost items shall be displayed.
- **REQ-023 (Must):** With the Found filter selected, only Found items shall be displayed.
- **REQ-024 (Must):** With the All filter selected, both Lost and Found items shall be displayed.
- **REQ-025 (Must):** Search and status filtering shall apply together. The results shall include only items that both match the search text by name and satisfy the selected status filter. For example, searching for `phone` with Lost selected shall show only matching Lost items.
- **REQ-026 (Must):** Changing or clearing the search text or changing the status filter shall update the displayed results accordingly.

## 4. Reporting an Item

- **REQ-027 (Must):** The application shall provide a form for reporting a new item.
- **REQ-028 (Must):** The form shall allow the user to provide an item name, Lost or Found status, location, date, and image.
- **REQ-029 (Must):** A valid submission shall add the new item to the application's available item list.
- **REQ-030 (Must):** The newly added item shall appear without requiring the user to reload the application.
- **REQ-031 (Must):** A new item shall not be added when required information is missing or invalid.
- **REQ-032 (Must):** The form shall validate that an item name is provided.
- **REQ-033 (Must):** The form shall validate that a valid status is selected; the allowed statuses are Lost and Found.
- **REQ-034 (Must):** The form shall validate that a location is provided.
- **REQ-035 (Must):** The form shall validate that a date is provided.
- **REQ-036 (Must):** The form shall validate that image information is provided in the format expected by the application.
- **REQ-037 (Must):** When the form is invalid, the application shall provide enough feedback for the user to understand that the item cannot yet be submitted.
- **REQ-038 (Must):** After a valid submission, the application shall clearly indicate that the submission succeeded.
- **REQ-039 (Must):** After a valid submission, the new item shall be eligible for search and status filtering.
- **REQ-040 (Must):** After a valid submission, the new item's data shall be stored in browser `localStorage`.
- **REQ-041 (May):** After successful submission, the form may be cleared or returned to its initial state.

## 5. Persistence and Data Updates

- **REQ-042 (Must):** The application shall use browser `localStorage` to store item data; a backend service or database is not required.
- **REQ-043 (Must):** User-created items shall remain available after the page is refreshed.
- **REQ-044 (Must):** Items stored in `localStorage` shall remain available after the application is closed and later reopened in the same browser, unless browser storage has been cleared.
- **REQ-045 (Out of required scope):** The application is not required to synchronize data between different browsers, devices, or users.
- **REQ-046 (Out of required scope):** Editing an existing item, deleting an existing item, marking an item resolved, and changing its Lost or Found status after submission are not required capabilities. They may be implemented only as additional functionality chosen by the team.

## 6. User Interface and Navigation

- **REQ-047 (Should):** The application should provide a simple and understandable interface.
- **REQ-048 (Must):** The interface shall let users identify reported items and distinguish Lost items from Found items.
- **REQ-049 (Must):** The interface shall let users search items, filter items, and access the report-item form.
- **REQ-050 (Must):** The interface shall let users understand which form fields are required, when a submission is invalid, and when a new item has been successfully added.
- **REQ-051 (Should):** The application should be usable on common desktop browser sizes.
- **REQ-052 (Expected):** The application is expected to have a responsive layout for smaller screen sizes.
- **REQ-053 (Should):** The application should provide a clear way to access its main functionality, including the item list and report-item form as applicable to the implementation.

## 7. Personal Data Restrictions

- **REQ-054 (Must):** The application shall not require user registration or authentication.
- **REQ-055 (Must):** The application shall not need to collect a user's name, email address, telephone number, postal address, account credentials, or payment information.
- **REQ-056 (Must):** Reported items shall not be associated with registered user accounts.

## 8. Technology and Collaboration Constraints

- **REQ-057 (Should):** The application should use HTML for page structure, CSS for styling and responsive design, JavaScript for application behavior, and browser `localStorage` for persistence.
- **REQ-058 (Should):** GitHub Copilot in Visual Studio Code should be used to assist development.
- **REQ-059 (Should):** Git and GitHub should be used for source control and team collaboration.
- **REQ-060 (Must, for the stated team exercise):** Each two-person team shall work in its own project repository, and both team members shall contribute to the shared repository.
- **REQ-061 (Must, for the stated team exercise):** Each team member shall perform development work on their own Git branch. Changes shall be reviewed and integrated into the team's shared project branch through Git.
- **REQ-062 (Implementation choice):** The team may decide its branch naming convention and commit strategy.
- **REQ-063 (Should):** Each team should deliver a small working web application that can be opened and demonstrated in a browser.
- **REQ-064 (Must):** Team members remain responsible for reviewing, understanding, testing, and accepting work produced with AI assistance.

## 9. Out of Scope and Implementation Freedom

- **REQ-065 (Out of scope):** Backend services, server-side processing, databases, user registration, authentication, user accounts, authorization, payment processing, paid AI APIs, external APIs, email notifications, SMS notifications, real-time communication, live synchronization between users, cloud file storage, and administrative user interfaces are outside the required scope.
- **REQ-066 (Implementation freedom):** The BRD does not prescribe exact HTML structure, CSS design, JavaScript file organization, project folder structure, naming conventions, internal application architecture, function names, component structure, or automated testing technology or test documentation format.
- **REQ-067 (Implementation freedom):** Teams may make implementation decisions and produce different solutions provided the required behavior is satisfied.
- **REQ-068 (Not prescribed):** The exact card visual design, colors, fonts, layout, navigation structure, and visual style are not prescribed by the BRD.
- **REQ-069 (Not prescribed):** The BRD does not prescribe an exact validation-message presentation or an exact navigation design.
- **REQ-070 (Not prescribed):** Teams may use Git commits, branches, merges, merge-conflict handling, and conflict resolution as part of the exercise; the exact branch naming and commit strategy are team decisions.

## 10. Clarifications Needed

The BRD does not define the following details. They must not be treated as settled behavior without an explicit decision:

- **CLAR-001:** The expected image-information format for form validation is not specified. REQ-036 preserves the validation requirement, but the accepted format must be clarified before its exact pass/fail criteria can be tested.
- **CLAR-002:** The BRD does not define what makes a date valid beyond requiring that a date be provided. No date range, format, or additional validity rule is specified.
- **CLAR-003:** “Common desktop browser sizes,” “smaller screen sizes,” and the expected degree of usability or responsive behavior have no defined viewport or acceptance thresholds.
- **CLAR-004:** The BRD does not define additional search matching details beyond partial name matching, case-insensitivity, and the supplied example. Do not infer trimming, tokenization, accent handling, or other normalization behavior.
