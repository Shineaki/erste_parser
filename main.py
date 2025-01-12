import json


class TransactionEntry:
    def __init__(self, entry: dict):
        self.booking_date = entry.get("booking")
        self.transaction_date = entry.get("transactionDateTime")
        self.partner_name = entry.get("partnerName") if entry.get("partnerName") else entry.get("bookingTypeTranslation")
        self.value = entry.get("amount").get("value")
        self.balance = entry.get("balance").get("value")
        self.reference = entry.get("reference")
        self.tag = None


class Money:
    def __init__(self):
        self.raw_tags = self.parse_tags()
        self.tags = self.raw_tags["partner_to_tag"]
        self.tags_list = self.raw_tags["tags_to_partners"]

        self.parsed_data = self.parse_json("11600006-00000000-96619674_2024-10-01_2025-01-12")

        self.print_per_type()

        self.save_tags()

    def parse_tags(self):
        with open("tags2.json", "r", encoding="utf-8") as json_file:
            data = json.load(json_file)
        return data

    def save_tags(self):
        with open("tags2.json", "w", encoding="utf-8") as json_file:
            what_to_dump = {
                "partner_to_tag": self.tags,
                "tags_to_partners": self.tags_list,
            }
            json.dump(what_to_dump, json_file, ensure_ascii=False)

    def parse_json(self, f_name: str) -> list[TransactionEntry]:
        with open("data/" + f_name + ".json", "r", encoding="utf-8") as json_file:
            data = json.load(json_file)

        parsed_data = []
        for entry in data:
            te = TransactionEntry(entry)
            parsed_data.append(te)
            if te.partner_name not in self.tags:
                # print(te.partner_name)
                new_tag = input(f"{te.partner_name} - {te.value} Ft - {te.transaction_date}: ")
                if new_tag:
                    self.tags[te.partner_name] = new_tag
                    if new_tag in self.tags_list:
                        self.tags_list[new_tag].append(te.partner_name)
                    else:
                        self.tags_list[new_tag] = [te.partner_name]
        return parsed_data

    def print_per_type(self):
        for tag_type in self.tags_list:
            spent_on_tag = 0
            entries = 0
            for c_vendor in self.tags_list[tag_type]:
                for entry in self.parsed_data:
                    if entry.partner_name == c_vendor:
                        spent_on_tag += entry.value
                        entries += 1
            spacer = " "*(20-len(tag_type))
            print(f"{tag_type}{spacer} \t {entries} \t -> {spent_on_tag} Ft \t -> {spent_on_tag/entries:.2f} Ft")


if __name__ == "__main__":
    money = Money()
