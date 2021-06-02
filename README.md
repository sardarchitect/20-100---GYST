# Life Organizer App

Features:
- Todo list 
- Project Timeline*
- Calendar*
- Cloud storage
- React-build
=======DIRECTORY STRUCTURE=======

/node_modules
    ...
/public
    index.html
/src
    /components
        /content
            /editor
                Editor.js
                AddTask.js
                TaskItem.js
            /sidebar
                Sidebar.js
                ProjectList.js
                ProjectListItem.js
                AddProject.js
            Content.js
        /header
            Header.js
    /context
        index.js
    /firebase
        index.js
    /hooks
        index.js
    App.js
    index.css
    index.js
.env
.gitignore
package.json
package-lock.json
README.md

=======FLOW STRUCTURE=======

index.html
    .root
        index.js
            index.css
            App (state:showSidebar)
                Header (prop:showSidebar)(f:toggleSidebar())
                Content (prop:showSidebar)
                    Sidebar (state:active)(state:showProjects)(f:toggleProjectList())(context: setSelectedProject)
                            AddProject (state:active)(state:title)(f:handleSubmit()) (f:addProject())
                            ProjectList (prop:active)(context:setSelectedProject)(context:projects)
                                ProjectListItem (prop:project)(state:hover)(context:projects)(context:setSelectedProject)(f:deleteProject())
                    Editor (state:currentTasks)(context:tasks)(context:selectedProject)(f:useEffect)
                        TaskItem (prop:key)(prop:task)
                        AddTask(state:active)(state:titleInput)(context:selectedProject)(f:useEffect)(f:handleSubmit)(f:addTask)
