class MyClass():
    def __init__(self, name):
        self.name = name

    def say_name(self):
        print('name is {}'.format(self.name))
    
    def makeModel(self,modelName):
        f = open('/root/boilerplate/npmgens/npmgens/modelTemplate.txt')
        file_str = f.read().replace("MODEL_NAME", modelName + "Model")
        print(file_str)
