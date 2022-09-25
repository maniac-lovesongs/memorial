import os
BASE_PATH = '/root/boilerplate'

class NPMGens():
    def __init__(self, name):
        self.name = name
        self.NPMGENS = BASE_PATH + '/npmgens/'
        self.MODEL_PATH = BASE_PATH + '/boilerplate/src/models/'
        self.COMPONENT_PATH = BASE_PATH + '/boilerplate/src/components/'
    
    def makeModel(self,modelName):
        f = open(self.NPMGENS + "/templates/model.txt")
        file_str = f.read().replace("MODEL_NAME", modelName + "Model")
        f.close()

        directory_path = self.MODEL_PATH + modelName 

        try: 
            os.mkdir(directory_path)
        except OSError as error:
            print(error)
        else:
            file_path = directory_path + "/" + modelName + "Model.js"
            f = open(file_path, 'w')
            f.write(file_str)
            f.close()

        return file_str

    def makeJSComponent(self, componentName):
        f = open(self.NPMGENS + "/templates/reactComponentJS.txt")
        js = f.read().replace("REACT_COMPONENT_LOWERCASE", componentName.lower())
        js = js.replace("REACT_COMPONENT", componentName)
        f.close()

        scss = self.makeSCSSComponent(componentName)

        directory_path = self.COMPONENT_PATH + componentName
        try:
            os.mkdir(directory_path)
        except OSError as error:
            print(error)
        else: 
            file_path = directory_path + "/" + componentName 

            # make js
            f = open(file_path + ".js", 'w')
            f.write(js)
            f.close()

            # make scss
            f = open(file_path + ".scss", 'w')
            f.write(scss) 
            f.close()

        return js

    def makeSCSSComponent(self, componentName):
        f = open(self.NPMGENS + "/templates/reactComponentSCSS.txt")
        file_str = f.read().replace("REACT_COMPONENT_LOWERCASE", componentName.lower())
        f.close()
        return file_str

    def makeComponent(self):
        self.makeJSComponent(self.name)
        self.makeModel(self.name)
