Base Components
  - LogoContainer
    - Logo
    - TitleText

  - Navbar
    - LogoContainer
    - Notification
      - components
        - PopoverWithBadge (*Popover)
          - Badge
      - PopoverNoti (*PopoverWithBadge)
      - PopoverMessage (*PopoverWithBadge)
      - Profile
        - TextSmall (TextSmall)
        - PopoverUserAvatar (*Popover)

  - Sidebar
    - components
      - Menu
        - Link (Link)
    - SidebarBody
      - DropdownGroup (*Dropdown)
      - Menu (Menu)
    - SidebarFooter
      - Menu (Menu)

  - Main 

  - Breadcrumbs
  
  - Button
  - LinkButton
  - ButtonIcon
  
  - TextMidget (10px)
  - TextSmall (12px)
    - states
      - TextSmallBold
  - TextMed (14px)
    - states
      - TextMedBold
  - Text (16px/Default)
    - states
      - TextBold
  
  - Popover
    - ButtonPopover (*ButtonIcon)
    - children
 
 
  - Link
    - states
      - LinkSmall
      
  - Accordion
    - TextMed 
    - ButtonAccordion (*ButtonIcon)
    - children (e.g props.children)

  - Tabs

  - Table
    - TableHeader
    - TableRow

  - Form 
    - children

  - List
    - ListRow
      - ListRowLeft 
      - ListRowRight 

  - Completed
    - children
    

Scenes
  - Courses Scene 
    - Navbar
    - Sidebar
    - Main
    - NoCourses
      - Text
      - LinkNoCourses (*Link)

    - HasCourses
    - Breadcrumbs
      - ListCourses (*List)
        - ListRowLeft 
          - Text
          - Textmed
        - ListRowRight
          - TutorialsCompleted (*Complete Component)
          - LinkButton (LinkButton)
        
  - Course Scene
    - Navbar
    - Sidebar
    - Main
      - Breadcrumbs

      - ContainerCourseMeta
        - HeaderCourseMeta
          - Title (React Element)
          - AccordionCourseDetails (*Accordion)
          - TutorialsCompleted (*Complete)

      - BodyCourseMeta

        - TabTutorials (*Tab)
          - ItemTutorials
            - ListTutorials (*List)
              - ListRow 
                - ListRowLeft
                  - ButtonPlay (*ButtonIcon)
                  - Tutorial Info
                    - Text
                    - TextMed
                - ListRowRight
                  - ViewTutorial
                    - ButtonViewTutorial (*LinkButton)
                    - TutorialDialog
          - ItemGroupDiscussions
          - ItemFiles
            - TableTutorialsFile

        - LatesetGroupDiscussion 
          - TextMed
          - NoDiscussion
            - TextMed
          - HasDisccusion
            - ListGroupDiscussions

  - Tutorial Scene / Modal
    - ModalHeader 
      - ButtonCloseHeader

    - ModalFooter
      - SliderControll

- ModalBody
  - TutorialInfo
      - Info
        - Title
        - TextMed
      - ThingsToDo
        - Textmed
      - ListThingsTodo
        - RowThingsTodo

  - ContainerTutorial
    - HeaderTutorial
      - DropdownVideo (*Dropdown)
      - Thumbnail
      - VideoTime
        - TextMidget
        - Textmed

    - BodyTutorial
      - TabTutorial
        - ItemQuestionsAndActivity
          - components
            - RowAccordion (Customize)
              - TextMidget
              - Text
              - ContainerAnswer
                - UserAvatar (*UserAvatar)
                - FormAnswer (*Form)

          - ListQuestions (*List)
            - RowQuestion (*RowAccordion)
          - ListReadings (*List)
            - RowReading (*RowAccordion)
          - ListQuiz (*List)
            - RowQuiz (*RowAccordion)


        - ItemFiles
          - TableTutorialFiles

        - DropdownSettings (*Dropdown)


      


       




  
