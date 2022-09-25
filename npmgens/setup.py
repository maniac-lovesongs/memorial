from setuptools import setup
setup(
    name = 'npmgens',
    version = '0.1.0',
    packages = ['npmgens'],
    entry_points = {
        'console_scripts': [
            'npmgens = npmgens.__main__:main'
        ]
    })