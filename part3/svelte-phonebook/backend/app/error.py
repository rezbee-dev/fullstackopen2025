class MissingRequiredFieldsError(Exception):
    """"Raised when data is missing key fields"""
    pass

class DuplicateEntryError(Exception):
    """Raised when entry already exists in database"""
    pass