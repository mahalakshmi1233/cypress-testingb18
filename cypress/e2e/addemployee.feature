Feature: Verify Add employee functionality

    Feature Description

#     Scenario: Verify add employee with mandatory details

#         Given User launch the apllication
#         When User Enter username "Admin" and password "admin123"
#         And User clicks on login button
#         Then User should be navigated to dashboardpage
#         And User clicks on PIM
#         And User clicks on Add employee sub menu
#         And User Enter firstname "shreya" and lastname as "M"
#         And User clicks on save button
#         Then User should get successfully saved message


    Scenario Outline: Verify add employee with mandatory details

        Given User launch the apllication
        When User Enter username "Admin" and password "admin123"
        And User clicks on login button
        Then User should be navigated to dashboardpage
        And User clicks on PIM
        And User clicks on Add employee sub menu
        And User Enter firstname "<firstname>" and lastname as "<lastname>"
 8       And User clicks on save button
        Then User should get successfully saved message

        Examples:
            | firstname | lastname |
            | MAHA     | s       |
            | shreya   | M        |
            | ravi   | s     |