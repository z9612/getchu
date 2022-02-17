import json
from pathlib import Path


file_location  = f'{Path(__file__).parent}'
input_file = f'{file_location}/dogtime_images.json'
output_file = f'{file_location}/dogtime_images_as_object.json'


def change_image_format():
    new_dict = {}

    with open(input_file, 'r', encoding='utf8') as file:
        dogs_with_images = json.load(file)
    
    for dog in dogs_with_images:
        new_list = []
        
        images = dogs_with_images[dog]['images']
        for image in images:
            new_list.append({
                'image': image,
                'caption': ''
            })
        
        new_dict.update({dog: new_list})

    with open(output_file, 'w', encoding='utf8') as file:
        json.dump(new_dict, file, ensure_ascii=False, indent=2)


change_image_format()