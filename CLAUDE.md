# Home Assistant Configuration Guidelines

## Commands
- **Deploy/Sync**: `bash sync_home_assistant.sh` - Syncs local changes to Home Assistant using rsync over Samba
- **Testing**: Use pytest for custom component tests - `pytest custom_components/<component_name>/test`
- **Validation**: Custom components should implement validation as described in HACS validation README

## Code Style
- **Python**: Follow [Home Assistant Python Style Guide](https://developers.home-assistant.io/docs/development_guidelines)
- **Naming**: Use snake_case for Python files/variables, PascalCase for classes
- **Imports**: Group standard library, third-party, and local imports in separate blocks
- **Typing**: Use type hints for function parameters and return values
- **Error Handling**: Use specific exceptions with descriptive messages
- **Component Structure**: Follow the standard component structure (const.py, __init__.py, etc.)
- **Validation**: Implement proper validation for all user inputs

## Best Practices
- Create tests for custom components in a test/ subdirectory
- Use manifest.json for component metadata
- Document service calls in services.yaml
- Provide translation files in translations/ directory