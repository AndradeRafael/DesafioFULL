IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210102195934_initial')
BEGIN
    CREATE TABLE [Obligators] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NULL,
        [CPF] nvarchar(max) NULL,
        CONSTRAINT [PK_Obligators] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210102195934_initial')
BEGIN
    CREATE TABLE [Titles] (
        [Id] int NOT NULL IDENTITY,
        [Number] int NOT NULL,
        [Interest] float NOT NULL,
        [Fine] float NOT NULL,
        [QuotaNumbers] int NOT NULL,
        [ObligatorId] int NOT NULL,
        [OriginalValue] float NOT NULL,
        [UpdatedValue] float NOT NULL,
        CONSTRAINT [PK_Titles] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Titles_Obligators_ObligatorId] FOREIGN KEY ([ObligatorId]) REFERENCES [Obligators] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210102195934_initial')
BEGIN
    CREATE TABLE [Quotas] (
        [Id] int NOT NULL IDENTITY,
        [Number] int NOT NULL,
        [Value] int NOT NULL,
        [Date] datetime2 NOT NULL,
        [TitleId] int NOT NULL,
        CONSTRAINT [PK_Quotas] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Quotas_Titles_TitleId] FOREIGN KEY ([TitleId]) REFERENCES [Titles] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210102195934_initial')
BEGIN
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'CPF', N'Name') AND [object_id] = OBJECT_ID(N'[Obligators]'))
        SET IDENTITY_INSERT [Obligators] ON;
    EXEC(N'INSERT INTO [Obligators] ([Id], [CPF], [Name])
    VALUES (1, N''31245678951'', N''Fulano'')');
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'CPF', N'Name') AND [object_id] = OBJECT_ID(N'[Obligators]'))
        SET IDENTITY_INSERT [Obligators] OFF;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210102195934_initial')
BEGIN
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Fine', N'Interest', N'Number', N'ObligatorId', N'OriginalValue', N'QuotaNumbers', N'UpdatedValue') AND [object_id] = OBJECT_ID(N'[Titles]'))
        SET IDENTITY_INSERT [Titles] ON;
    EXEC(N'INSERT INTO [Titles] ([Id], [Fine], [Interest], [Number], [ObligatorId], [OriginalValue], [QuotaNumbers], [UpdatedValue])
    VALUES (1, 0.02E0, 0.01E0, 101010, 1, 300.0E0, 5, 310.19999999999999E0)');
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Fine', N'Interest', N'Number', N'ObligatorId', N'OriginalValue', N'QuotaNumbers', N'UpdatedValue') AND [object_id] = OBJECT_ID(N'[Titles]'))
        SET IDENTITY_INSERT [Titles] OFF;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210102195934_initial')
BEGIN
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Date', N'Number', N'TitleId', N'Value') AND [object_id] = OBJECT_ID(N'[Quotas]'))
        SET IDENTITY_INSERT [Quotas] ON;
    EXEC(N'INSERT INTO [Quotas] ([Id], [Date], [Number], [TitleId], [Value])
    VALUES (1, ''2020-07-10T00:00:00.0000000'', 10, 1, 100)');
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Date', N'Number', N'TitleId', N'Value') AND [object_id] = OBJECT_ID(N'[Quotas]'))
        SET IDENTITY_INSERT [Quotas] OFF;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210102195934_initial')
BEGIN
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Date', N'Number', N'TitleId', N'Value') AND [object_id] = OBJECT_ID(N'[Quotas]'))
        SET IDENTITY_INSERT [Quotas] ON;
    EXEC(N'INSERT INTO [Quotas] ([Id], [Date], [Number], [TitleId], [Value])
    VALUES (2, ''2020-08-10T00:00:00.0000000'', 11, 1, 100)');
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Date', N'Number', N'TitleId', N'Value') AND [object_id] = OBJECT_ID(N'[Quotas]'))
        SET IDENTITY_INSERT [Quotas] OFF;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210102195934_initial')
BEGIN
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Date', N'Number', N'TitleId', N'Value') AND [object_id] = OBJECT_ID(N'[Quotas]'))
        SET IDENTITY_INSERT [Quotas] ON;
    EXEC(N'INSERT INTO [Quotas] ([Id], [Date], [Number], [TitleId], [Value])
    VALUES (3, ''2020-09-10T00:00:00.0000000'', 12, 1, 100)');
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Date', N'Number', N'TitleId', N'Value') AND [object_id] = OBJECT_ID(N'[Quotas]'))
        SET IDENTITY_INSERT [Quotas] OFF;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210102195934_initial')
BEGIN
    CREATE INDEX [IX_Quotas_TitleId] ON [Quotas] ([TitleId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210102195934_initial')
BEGIN
    CREATE INDEX [IX_Titles_ObligatorId] ON [Titles] ([ObligatorId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210102195934_initial')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20210102195934_initial', N'5.0.1');
END;
GO

COMMIT;
GO

