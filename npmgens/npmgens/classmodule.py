BASE_PATH = '/root/boilerplate/npmgens/'
class MyClass():
    def __init__(self, name):
        self.name = name
    
    def makeModel(self,modelName):
        f = open(BASE_PATH + "/templates/model.txt")
        file_str = f.read().replace("MODEL_NAME", modelName + "Model")
        print(file_str)
        f.close()
        return file_str

    def makeJSComponent(self, componentName):
        f = open(BASE_PATH + "/templates/reactComponentJS.txt")
        file_str = f.read().replace("REACT_COMPONENT_LOWERCASE", componentName.lower())
        file_str = file_str.replace("REACT_COMPONENT", componentName)
        f.close()
        print(file_str)
        return file_str

    def makeSCSSComponent(self, componentName):
        f = open(BASE_PATH + "/templates/reactComponentSCSS.txt")
        file_str = f.read().replace("REACT_COMPONENT_LOWERCASE", componentName.lower())
        f.close()
        print(file_str)
        return file_str

    def makeComponent(self, c):
        self.makeJSComponent(c)
        self.makeSCSSComponent(c) 
        self.makeModel(c)
