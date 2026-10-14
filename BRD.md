# Business Requirements Document — FindIt Lost & Found

## 1. Purpose

The FindIt — Lost & Found application allows users to browse, search, filter, and report lost or found items through a simple web-based interface.

The application should make it easy for a visitor to:

- view reported lost and found items;
- search items by name;
- filter items by status;
- report a new lost or found item;
- view basic information about each reported item;
- keep submitted items available during future browser sessions.

The application is intended as a small browser-based project for development, collaboration, Git, and GitHub Copilot practice.

---

## 2. Intended User

The intended user is any visitor who wants to:

- look for an item they have lost;
- browse items that other users have found;
- report a lost item;
- report a found item.

The application does not require a user account.

Users are not required to register or log in.

---

## 3. Application Scope

The application must provide the following main capabilities:

1. Display lost and found items.
2. Search items by name.
3. Filter items by Lost or Found status.
4. Add a new lost or found item.
5. Store item data locally in the browser.
6. Restore stored items when the application is reopened in the same browser.

The application should work as a standalone browser application.

---

## 4. Item Information

Each item must contain the following information:

- item name;
- status;
- location;
- date;
- image.

The status must be one of:

- Lost;
- Found.

The item information should be sufficient for a user to understand what was lost or found and where and when it was reported.

---

## 5. Item Display

Reported items should be displayed as visual cards.

Each item card should show:

- image;
- item name;
- Lost or Found status;
- location;
- date.

The user should be able to distinguish Lost items from Found items.

The exact visual design of the cards is not prescribed.

---

## 6. Initial Items

The application may contain a predefined set of example items when it is opened for the first time.

These example items may include both Lost and Found items.

The exact number, names, locations, dates, and images of the initial example items are implementation decisions.

If predefined items are used, they should behave in the same way as user-added items when searching and filtering.

---

## 7. Search

The application must allow the user to search for items by item name.

The search should update the displayed items based on the entered search text.

Items whose names match the search text should remain visible.

Items whose names do not match the search text should not be displayed in the search results.

The search should not require an exact full-name match.

For example, searching for:

`wallet`

should be able to match an item named:

`Black Wallet`

Search behavior should be case-insensitive.

---

## 8. Status Filtering

The application must allow the user to filter items based on their status.

The available filtering options must allow the user to view:

- all items;
- Lost items only;
- Found items only.

When the Lost filter is selected, only Lost items should be displayed.

When the Found filter is selected, only Found items should be displayed.

When the All filter is selected, both Lost and Found items should be displayed.

---

## 9. Combined Search and Filtering

Search and status filtering should work together.

For example:

If the user searches for `phone` and selects the `Lost` filter, the application should display only items that:

- match `phone` by name; and
- have the Lost status.

Changing or clearing either the search or filter should update the displayed results accordingly.

---

## 10. Reporting a New Item

The application must provide a form that allows the user to report a new item.

The form must allow the user to provide:

- item name;
- Lost or Found status;
- location;
- date;
- image.

After a valid form is submitted, the new item should be added to the collection of items displayed by the application.

The user should not need to reload the application to see the newly added item.

---

## 11. Form Validation

A new item must not be added if required information is missing or invalid.

At minimum, the application should validate that:

- item name is provided;
- a valid status is selected;
- location is provided;
- date is provided;
- image information is provided in the format expected by the application.

If the form is invalid, the application should provide enough feedback for the user to understand that the item cannot yet be submitted.

The exact visual presentation of validation messages is not prescribed.

---

## 12. Successful Submission

After a valid item is submitted:

- the item must be added to the available item list;
- the item must be eligible for search;
- the item must be eligible for status filtering;
- the item data must be stored in browser local storage.

The application should clearly indicate that the submission has succeeded.

The form may be cleared or returned to its initial state after successful submission.

---

## 13. Local Storage

The application must use browser `localStorage` to store item data.

A backend service or database is not required.

Items created by the user must remain available after the page is refreshed.

Items stored in `localStorage` must also remain available when the application is closed and later reopened in the same browser, unless the browser storage has been cleared.

The application does not need to synchronize data between:

- different browsers;
- different devices;
- different users.

---

## 14. Data Updates

The application is only required to support creation and viewing of items.

The following actions are not required:

- editing an existing item;
- deleting an existing item;
- marking an item as resolved;
- changing an item's Lost or Found status after submission.

These capabilities may be added only if a team chooses to implement them as additional functionality, but they are not part of the required scope.

---

## 15. User Interface Requirements

The application should provide a simple and understandable interface.

The user should be able to:

- identify reported items;
- distinguish Lost items from Found items;
- search items;
- filter items;
- access the report-item form;
- understand which fields are required;
- understand when a form submission is invalid;
- understand when a new item has been successfully added.

The application should be usable on common desktop browser sizes.

A responsive layout for smaller screen sizes is expected.

The exact colors, fonts, layout, navigation structure, and visual style are not specified.

---

## 16. Navigation

The application should provide a clear way for the user to access its main functionality.

Depending on the implementation, this may include navigation to:

- the item list;
- the report-item form.

The exact navigation design is left to the implementation team.

---

## 17. Personal Data

The application must not require user registration or authentication.

The application does not need to collect:

- user name;
- email address;
- telephone number;
- postal address;
- account credentials;
- payment information.

Reported items are not associated with registered user accounts.

---

## 18. Technology Constraints

The application should be implemented using:

- HTML for page structure;
- CSS for styling and responsive design;
- JavaScript for application behavior;
- browser `localStorage` for persistence.

GitHub Copilot in Visual Studio Code should be used to assist development.

Git and GitHub should be used for source control and team collaboration.

---

## 19. Source Control and Collaboration

Each two-person team will work on its own project repository.

Both team members should contribute to the shared repository.

Each team member should perform development work on their own Git branch.

Changes should be reviewed and integrated into the team's shared project branch through Git.

The exercise may involve:

- commits;
- branches;
- merges;
- merge conflicts;
- conflict resolution.

The exact branch naming convention and commit strategy may be decided by each team.

---

## 20. Out of Scope

The following functionality is outside the required scope:

- backend services;
- server-side processing;
- databases;
- user registration;
- authentication;
- user accounts;
- authorization;
- payment processing;
- paid AI APIs;
- external APIs;
- email notifications;
- SMS notifications;
- real-time communication;
- live synchronization between users;
- cloud file storage;
- administrative user interfaces.

---

## 21. Implementation Freedom

This BRD defines the required business behavior and basic technical boundaries.

It does not prescribe:

- exact HTML structure;
- exact CSS design;
- JavaScript file organization;
- project folder structure;
- naming conventions;
- Git branch names;
- internal application architecture;
- function names;
- component structure;
- automated testing technology;
- test documentation format.

Each team may make its own implementation decisions as long as the required behavior is satisfied.

Different teams are expected to produce different solutions.

---

## 22. GitHub Copilot Usage

GitHub Copilot should be used as part of the implementation process.

Team members may use Copilot to assist with activities such as:

- understanding requirements;
- planning implementation;
- generating HTML, CSS, and JavaScript;
- reviewing code;
- identifying possible defects;
- proposing fixes;
- improving usability;
- creating test scenarios;
- resolving technical problems.

Team members remain responsible for reviewing, understanding, testing, and accepting the work produced with AI assistance.

---

## 23. Delivery Expectation

Each team should deliver a small working web application that can be opened and demonstrated in a browser.

The final result should allow a reviewer to demonstrate representative behavior including:

1. viewing Lost and Found items;
2. searching for an item;
3. filtering items;
4. combining search and filtering;
5. reporting a new item;
6. validating invalid input;
7. seeing the newly added item;
8. refreshing or reopening the application and confirming that stored items remain available.

Each team should be able to explain:

- how the application was implemented;
- how work was divided between team members;
- how Git branches were used;
- how changes were integrated;
- how GitHub Copilot was used;
- how AI-generated output was checked;
- any merge conflicts encountered and how they were resolved;
- any known limitations of the final application.