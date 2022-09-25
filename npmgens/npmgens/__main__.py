import sys
from .classmodule import NPMGens
from .funcmodule import my_function

def main():
    print('in main')
    args = sys.argv[1:]
    print('count of args :: {}'.format(len(args)))
    for arg in args:
        print('passed argument :: {}'.format(arg))
    

    if len(args) == 1:
        my_object = NPMGens(args[0])
        my_object.makeComponent()
    elif len(args) > 1 and args[0] == '--model': 
        my_object = NPMGens('')
        my_object.makeModel(name)

if __name__ == '__main__':
    main()